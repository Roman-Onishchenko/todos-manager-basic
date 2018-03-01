import { put, call } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import Api from '../../api/api';

import { setErrorMessage, addTask, hideTaskModal, getTasks } from '../../reduxBase/actions/';

export default function* createTask(action) {
  const api = new Api();
  const newTask = action.task.toJS();
  let tasks;
  try {
    yield call(api.save, `/createTask/${action.userId}`, newTask);
  } catch (response) {
    yield put(setErrorMessage(response.error));
    return;
  }
  
  yield put(getTasks(action.userId));
  yield put(hideTaskModal());
}
