import * as actionTypes from '../constants';

export function getTasks() {
  return {
    type: actionTypes.GET_TASKS,
  };
}

export function setTasks(tasks) {
  return {
    type: actionTypes.SET_TASKS,
    tasks,
  };
}

export function setErrorMessage(message) {
  return {
    type: actionTypes.SET_ERROR_MESSAGE,
    message,
  };
}

export function createTask(task) {
  return {
    type: actionTypes.CREATE_TASK,
    task,
  };
}

export function addTask(task) {
  return {
    type: actionTypes.ADD_TASK,
    task,
  };
}

export function updateTask(task, taskId) {
  return {
    type: actionTypes.UPDATE_TASK,
    task,
    taskId,
  };
}

export function doneTask(taskId) {
  return {
    type: actionTypes.DONE_TASK,
    taskId,
  };
}

export function deleteTask(taskId) {
  return {
    type: actionTypes.DELETE_TASK,
    taskId,
  };
}

export function clearTasksList(isDone, category) {
  return {
    type: actionTypes.CLEAR_TASKS_LIST,
    isDone,
    category,
  };
}

export function showTaskAddModal() {
  return {
    type: actionTypes.SHOW_TASK_ADD_MODAL,
  };
}

export function showTaskEditModal(taskId) {
  return {
    type: actionTypes.SHOW_TASK_EDIT_MODAL,
    taskId,
  };
}

export function hideTaskModal() {
  return {
    type: actionTypes.HIDE_TASK_MODAL,
  };
}

export function userRegister(user) {
  return {
    type: actionTypes.USER_REGISTER,
    user,
  };
}

export function userAuthAttempt(user) {
  return {
    type: actionTypes.USER_AUTH_ATTEMPT,
    user,
  };
}

export function userAuthorize(userId) {
  return {
    type: actionTypes.USER_AUTHORIZE,
    userId,
  };
}
