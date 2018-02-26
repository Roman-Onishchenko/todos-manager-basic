import { put, call } from 'redux-saga/effects';
import Api from '../../api/api';

import { setErrorMessage, setTasks } from '../../reduxBase/actions/';

export default function* loadTasks() {
  const api = new Api();
  let tasks = null;

  try {
    const response = yield call(api.get);
    tasks = response.toJS();
    // console.log(response);
    // tasks = response.get('tasks')
    //   .map((itemData) => fromApiObject(itemData));
  } catch (response) {
    yield put(setErrorMessage('Error loading tasks'));
    return;
  }

  yield put(setTasks(tasks));
}
