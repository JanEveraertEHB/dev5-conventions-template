import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* starterFetchList(action) {
  try {
    const result = yield axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/starter/user`,
      headers: { Authorization: `Bearer ${localStorage.getItem('id_token')}` }
    });
    yield put({ type: 'STARTER_FETCH_LIST_SUCCESS', data: result.data });
  } catch (e) {
    yield put({ type: 'STARTER_FETCH_LIST_FAILED', message: e.message });
  }
}
function* starterSagas() {
  yield takeEvery('STARTER_FETCH_LIST', starterFetchList);
}

export default starterSagas;
