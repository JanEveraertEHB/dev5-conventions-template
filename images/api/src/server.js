const express = require('express');
const uuidv1 = require('uuid');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const retryKnex = require('./Utils/RetryKnex');

const Starter = require('./Fields/Starter');

const redis = require('redis');

class App {
  constructor(opts) {
    const pg = require('knex')({
      client: 'pg',
      version: '9.6',
      connection: process.env.PG_CONNECTION_STRING,
      searchPath: ['knex', 'public']
    });

    this.pg = pg;
    this.start = this.start.bind(this);

    this.hasSetup = false;

    this.app = express();
    this.s = http.Server(this.app);

    this.broker = redis.createClient(6379, 'broker');
  }
  async start() {
    const _this = this;

    this.app.use(bodyParser.json());
    this.app.use(
      bodyParser.urlencoded({
        // to support URL-encoded bodies
        extended: true
      })
    );
    this.app.use(cors({ credentials: false, origin: '*' }));
    this.app.get('/', (req, res, next) => {
      res.sendStatus(200);
    });

    this.app.get('/test', async (req, res, next) => {
      await checkJWt(req, (data) => {
        console.log(data);
        res.send(data);
      }).catch((error) => {
        res.sendStatus(400);
      });
    });

    let version = process.env.APP_VERSION_NUMBER;
    if (process.env.APP_VERSION_LABEL) {
      version += '-' + process.env.APP_VERSION_LABEL;
    }

    console.info(`Starter (${version}) ready and listening on ${3000}`);

    new Starter(this.broker).assignFields(this.app, this.pg);

    this.s.listen(3000, () => {
      console.log(`server up and listening on ${3000}`);
    });

    return await retryKnex(async () => {
      const self = this;

      await this.pg
        .raw('select 1+1 as result')
        .then(async (resolve, reject) => {
          if (!_this.hasSetup) {
            _this.initialiseTables(_this.pg);
            return true;
          }
        })
        .catch((error) => {
          console.log('- error:', error.code);
          setTimeout(retryKnex(), 5000);
        });
    });
  }

  async initialiseTables(pg) {
    await pg.schema.hasTable('starter').then(async (exists) => {
      if (!exists) {
        await pg.schema
          .createTable('starter', (table) => {
            table.increments();
            table.uuid('uuid');
            table.string('title');
            table.timestamps(true, true);
          })
          .then(async () => {
            console.log('created table starter');
            for (let i = 0; i < 10; i++) {
              const uuid = uuidv1();
              await pg.table('starter').insert({ uuid, title: `random element number ${i}` })
            }
          });
      }
    });
    this.hasSetup = true;
  }
}

new App().start();
