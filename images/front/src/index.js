import React from 'react';
import { render } from 'react-dom';
import 'glamor/reset';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {
  routerMiddleware,
  routerReducer,
  ConnectedRouter
} from 'react-router-redux';

import promiseMiddleware from 'redux-promise';

import createHistory from 'history/createBrowserHistory';
import { Route, Switch } from 'react-router-dom';

import reducers from './reducers/';
import sagas from './sagas/';

import HomeApp from './components/Home/HomeApp.jsx';

const history = createHistory();
//reacty-redux-router

const sagaMiddleware = createSagaMiddleware();

let middleware = applyMiddleware(
  routerMiddleware(history),
  sagaMiddleware,
  promiseMiddleware,
  thunkMiddleware,
  createLogger({
    collapsed: true
  })
);

let store = createStore(
  combineReducers({ ...reducers, router: routerReducer }),
  middleware
);
sagaMiddleware.run(sagas);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={HomeApp} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
