import { put, call } from 'redux-saga/effects';
import Api from '../../api/api';

import { setErrorMessage } from '../../reduxBase/actions/';

export default function* deleteTask(action) {
  const api = new Api();
  try {
    yield call(api.remove, action.taskId);
  } catch (response) {
    yield put(setErrorMessage(response.error));
    return;
  }
}
