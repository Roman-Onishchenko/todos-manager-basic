import { Map, List } from 'immutable';
import * as actionTypes from '../constants';

const initialState = new Map({
  tasks: new List([
    // new Map({
    //   id: 1,
    //   text: 'LoremLorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. LoremLorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
    //   isDone: 0,
    //   priority: '1',
    //   category: 'day',
    // }),
    // new Map({
    //   id: 2,
    //   text: 'Xасто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
    //   isDone: 0,
    //   priority: '2',
    //   category: 'day',
    // }),
    // new Map({
    //   id: 3,
    //   text: 'Lorem Ipsum используемый в печати и вэб-дизайне. LoremLorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. LoremLorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
    //   isDone: 0,
    //   priority: '3',
    //   category: 'day',
    // }),
    //  new Map({
    //   id: 4,
    //   text: 'LoremLorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. LoremLorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
    //   isDone: 0,
    //   priority: '1',
    //   category: 'day',
    // }),
    // new Map({
    //   id: 5,
    //   text: 'Xасто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
    //   isDone: 0,
    //   priority: '2',
    //   category: 'day',
    // }),
    // new Map({
    //   id: 6,
    //   text: 'Lorem Ipsum используемый в печати и вэб-дизайне. LoremLorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. LoremLorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
    //   isDone: 0,
    //   priority: '3',
    //   category: 'day',
    // }),
    // new Map({
    //   id: 7,
    //   text: 'Lorem Ipsum используемый в печати и вэб-дизайне. LoremLorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. LoremLorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
    //   isDone: 0,
    //   priority: '3',
    //   category: 'day',
    // }),
  ]),
  modalType: null,
  taskId: null,
  errorMessage: null,
});

export default function todoListReducer(state = initialState, action) {
   let taskIndex;
    switch (action.type) {
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
