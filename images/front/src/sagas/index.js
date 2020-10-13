import { all, spawn } from 'redux-saga/effects';
import StarterSagas from './StarterSagas';

export default function* rootSaga() {
  yield all([
    spawn(StarterSagas),
  ]);
}
