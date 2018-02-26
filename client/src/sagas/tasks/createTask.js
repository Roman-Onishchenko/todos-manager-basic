import { put, call } from 'redux-saga/effects';
import Api from '../../api/api';

import { setErrorMessage, addTask, hideTaskModal } from '../../reduxBase/actions/';

export default function* createTask(action) {
  console.log('here');
  const api = new Api();
  let task;

  try {
    console.log('here');
    const response = yield call(api.save, '/task', action.task);
    task = response.data;
  } catch (response) {
    yield put(setErrorMessage(response.error));
    return;
  }
  console.log('here');
  yield put(addTask(task));
  yield put(hideTaskModal());
}
