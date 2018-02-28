import { takeEvery } from 'redux-saga/effects';

import {
	GET_TASKS,
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  CLEAR_TASKS_LIST,
} from '../reduxBase/constants';

import getTasks from './tasks/getTasks';
import createTask from './tasks/createTask';
import deleteTask from './tasks/deleteTask';
import clearTasksList from './tasks/clearTasksList';
import updateTask from './tasks/updateTask';

function* mySaga() {
	yield takeEvery(GET_TASKS, getTasks);
  yield takeEvery(CREATE_TASK, createTask);
  yield takeEvery(DELETE_TASK, deleteTask);
  yield takeEvery(UPDATE_TASK, updateTask);
  yield takeEvery(CLEAR_TASKS_LIST, clearTasksList);
}

export default mySaga;

