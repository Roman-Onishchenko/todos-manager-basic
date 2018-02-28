import { put, call } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import Api from '../../api/api';

import { setErrorMessage, addTask, hideTaskModal } from '../../reduxBase/actions/';

export default function* createTask(action) {
  const api = new Api();
  const newTask = action.task.toJS();
  let task;
  try {
    const response = yield call(api.save, null, newTask);
    task = fromJS(response.data);
  } catch (response) {
    yield put(setErrorMessage(response.error));
    return;
  }
  yield put(addTask(task));
  yield put(hideTaskModal());
}
