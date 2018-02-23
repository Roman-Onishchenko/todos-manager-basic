import { call, takeEvery, cancel } from 'redux-saga/effects';

import {
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
} from '../reduxBase/constants';

import loadTasks from './tasks/loadTasks';
import createTask from './tasks/createTask';
import deleteTask from './tasks/deleteTask';
import updateTask from './tasks/updateTask';

export function* tasksWatchers() {
  yield call(loadTasks);

  const createTaskWatcher = yield takeEvery(CREATE_TASK, createTask);
  const deleteTaskWatcher = yield takeEvery(DELETE_TASK, deleteTask);
  const updateTaskWatcher = yield takeEvery(UPDATE_TASK, updateTask);

  yield cancel(createTaskWatcher);
  yield cancel(deleteTaskWatcher);
  yield cancel(updateTaskWatcher);
}

export default tasksWatchers;

