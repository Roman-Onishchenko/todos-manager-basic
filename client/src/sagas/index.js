import { takeEvery } from 'redux-saga/effects';

import {
  USER_REGISTER,
  USER_AUTH_ATTEMPT,
	GET_TASKS,
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  CLEAR_TASKS_LIST,
} from '../reduxBase/constants';

import userRegister from './users/userRegister';
import userAuthorize from './users/userAuthorize';
import getTasks from './tasks/getTasks';
import createTask from './tasks/createTask';
import deleteTask from './tasks/deleteTask';
import clearTasksList from './tasks/clearTasksList';
import updateTask from './tasks/updateTask';

function* todoAppSaga() {
  yield takeEvery(USER_REGISTER, userRegister);
  yield takeEvery(USER_AUTH_ATTEMPT, userAuthorize);
	yield takeEvery(GET_TASKS, getTasks);
  yield takeEvery(CREATE_TASK, createTask);
  yield takeEvery(DELETE_TASK, deleteTask);
  yield takeEvery(UPDATE_TASK, updateTask);
  yield takeEvery(CLEAR_TASKS_LIST, clearTasksList);
}

export default todoAppSaga;

