import { Map, List } from 'immutable';
import * as actionTypes from '../constants';

const initialState = new Map({
  user: new Map({
    id: 1,
    login: null,
  }),
  tasks: new List([
    new Map({
      id: 1,
      text: 'LoremLorem', 
      priority: '1',
      category: 'day',
    }),
  ]),
  modalType: null,
  taskId: null,
  errorMessage: null,
});

export default function todoListReducer(state = initialState, action) {
   let taskIndex;
    switch (action.type) {
      case actionTypes.ADD_USER:
        return state.set('user', action.user);

      case actionTypes.SET_TASKS:
        return state.set('tasks', action.tasks);

      case actionTypes.ADD_TASK:
        return state.updateIn(['tasks'], tasks => tasks.push(action.task));

      case actionTypes.UPDATE_TASK:
        taskIndex = state.get('tasks').findIndex(task => (task.get('id') === action.taskId));
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
