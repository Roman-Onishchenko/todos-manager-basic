import { put, call } from 'redux-saga/effects';
import Api from '../../api/api';

import { setErrorMessage, getTasks, hideTaskModal } from '../../reduxBase/actions/';

export default function* createTask(action) {
  const api = new Api();
  const newTask = action.task.toJS();
  try {
    yield call(api.save, `/createTask/${action.userId}`, newTask);
  } catch (response) {
    yield put(setErrorMessage(response.error));
    return;
  }

  yield put(getTasks(action.userId));
  yield put(hideTaskModal());
}
