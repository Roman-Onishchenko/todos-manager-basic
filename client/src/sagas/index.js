import { call, takeEvery } from 'redux-saga/effects';

import {
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
} from '../reduxBase/constants';

import loadTasks from './tasks/loadTasks';
import createTask from './tasks/createTask';
import deleteTask from './tasks/deleteTask';
import updateTask from './tasks/updateTask';

function* mySaga() {
  // yield call(loadTasks);
  yield takeEvery(CREATE_TASK, createTask);
  yield takeEvery(DELETE_TASK, deleteTask);
  yield takeEvery(UPDATE_TASK, updateTask);
}

export default mySaga;

