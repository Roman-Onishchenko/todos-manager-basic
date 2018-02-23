import { Map, List } from 'immutable';
import * as actionTypes from '../constants';

const initialState = new Map({
  users: new List([
    new Map({
      id: 1,
      authorized: false,
      name: null,
      email: null,
      login: null,
      pass: null,
    }),
    
  ]),
});

export default function usersReducer(state = initialState, action) {
  let userIndex;
    switch (action.type) {
      case actionTypes.USER_REGISTER:
        return state.set('users', action.user);

      case actionTypes.USER_AUTHORIZE:
        userIndex = state.get('users').findIndex(user => (user.get('id') === action.userId));
        if (userIndex === -1) {
          return state;
        }
        return state.setIn(['users', userIndex], state.get('users').get(userIndex).merge({
          authorized: true,
        }));

      default:
        return state;
    }
  }
