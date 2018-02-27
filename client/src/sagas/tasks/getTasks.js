import { put, call } from 'redux-saga/effects';
import Api from '../../api/api';

import { setErrorMessage, setTasks } from '../../reduxBase/actions/';

export default function* getTasks() {
  const api = new Api();
  let tasks = null;

  try {
    const response = yield call(api.get);
    tasks = response.delete(0);
  } catch (response) {
    yield put(setErrorMessage('Error loading tasks'));
    return;
  }

  yield put(setTasks(tasks));
}
