const uuidV1 = require('uuid/v1');

class Starter {
  constructor(broker, pg) {
    this.broker = broker;

    this.assignFields = this.assignFields.bind(this);
  }

  assignFields(app, pg) {
    const _this = this;
    app.get('/starter', async (req, res, next) => {
      console.log('init');
      await pg
        .select()
        .table('starter')
        .then(function (results) {
          res.json(results);
        })
        .catch((error) => {
          console.log(error, 'error');
          res.sendStatus(400);
        });
    });
  }
}

module.exports = Starter;
