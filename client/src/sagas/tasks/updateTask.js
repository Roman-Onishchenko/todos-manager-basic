import { call, put } from 'redux-saga/effects';

import Api from '../../api/api';

import {
  setErrorMessage,
  hideTaskModal,
} from '../../reduxBase/actions/';

export default function* updateTask(action) {
  const api = new Api();
  const updatedTask = action.task.toJS();
  try {
    yield call(api.save, `/updateTask/${action.userId}`, updatedTask);
  } catch (response) {
    yield put(setErrorMessage(response.error));
    return;
  }
  
  yield put(hideTaskModal());
}
