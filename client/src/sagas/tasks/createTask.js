import { put, call } from 'redux-saga/effects';
import Api from 'api/api';

import { setErrorMessage, addTask, hideTaskModal } from '../../reduxBase/actions/';

export default function* createProcedure(action) {
  const api = new Api();
  let task;

  try {
    const response = yield call(api.save, '/task', action.task);
    task = fromApiObject(response.data);
  } catch (response) {
    yield put(setErrorMessage(response.error));
    return;
  }
  yield put(addTask(task));
  yield put(hideTaskModal());
}
