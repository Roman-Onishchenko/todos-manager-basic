import { Map, List } from 'immutable';
import * as actionTypes from '../constants';

const initialState = new Map({
  user: new Map({
    id: null,
    login: null,
  }),
  userExist: false,
  userNotAuth: false,
  tasks: new List([ ]),
  modalType: null,
  taskId: null,
  errorMessage: null,
});

export default function todoListReducer(state = initialState, action) {
   let taskIndex;
    switch (action.type) {
      case actionTypes.SET_USER:
        return state.merge({
          userExist: false,
          userNotAuth: false,
          user: action.user,
        });

      case actionTypes.USER_EXIST:
        return state.set('userExist', true);

      case actionTypes.USER_NOT_AUTH:
        return state.set('userNotAuth', true);

      case actionTypes.SET_TASKS:
        return state.set('tasks', action.tasks);

      case actionTypes.ADD_TASK:
        return state.updateIn(['tasks'], tasks => tasks.push(action.task));

      case actionTypes.UPDATE_TASK:
        taskIndex = state.get('tasks').findIndex(task => (task.get('id') === action.task.get('id')));
        if (taskIndex === -1) {
          return state;
        }
        return state.updateIn(['tasks', taskIndex], () => action.task);

      case actionTypes.DONE_TASK:
        taskIndex = state.get('tasks').findIndex(task => (task.get('id') === action.taskId));
        if (taskIndex === -1) {
          return state;
        }
        return state.setIn(['tasks', taskIndex], state.get('tasks').get(taskIndex).merge({
          isDone: 1,
        }));

      case actionTypes.DELETE_TASK:
        taskIndex = state.get('tasks').findIndex(task => (task.get('id') === action.taskId));
        if (taskIndex === -1) {
          return state;
        }
        return state.deleteIn(['tasks', taskIndex]);

      case actionTypes.SHOW_TASK_ADD_MODAL:
        return state.merge({
          modalType: 'addTask',
          taskId: null,
        });

      case actionTypes.SHOW_TASK_EDIT_MODAL:
        return state.merge({
          modalType: 'editTask',
          taskId: action.taskId,
        });

      case actionTypes.HIDE_TASK_MODAL:
        return state.merge({
          modalType: null,
          taskId: null,
        });

      case actionTypes.SET_ERROR_MESSAGE:
        return state.merge({
          modalType: null,
          errorMessage: action.message,
        });
        
      default:
        return state;
    }
  }
