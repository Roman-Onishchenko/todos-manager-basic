import { combineReducers } from 'redux';

import todoListReducer from './todoListReducer';
import usersReducer from './usersReducer';

export default combineReducers (
	{
	  todoListReducer,
	  usersReducer
	}
)