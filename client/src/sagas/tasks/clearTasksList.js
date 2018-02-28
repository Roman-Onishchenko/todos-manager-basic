import { put, call } from 'redux-saga/effects';
import Api from '../../api/api';

import { setErrorMessage, getTasks } from '../../reduxBase/actions/';

export default function* clearTasksList(action) {
  const api = new Api();
  try {
    yield call(api.remove, null, action.isDone, action.category);
  } catch (response) {
    yield put(setErrorMessage(response.error));
    return;
  }

  yield put(getTasks());
}
