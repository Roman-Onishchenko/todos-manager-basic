import { put, call } from 'redux-saga/effects';
import Api from '../../api/api';

import { setErrorMessage, setTasks } from '../../reduxBase/actions/';

export default function* getTasks(action) {
  const api = new Api();
  let tasks = null;

  try {
    const response = yield call(api.get, `/getTasks/${action.id}`);
    tasks = response.get('tasks');
  } catch (response) {
    yield put(setErrorMessage(response.error));
    return;
  }

  yield put(setTasks(tasks));
}
