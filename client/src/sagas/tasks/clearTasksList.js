import { put, call } from 'redux-saga/effects';
import Api from '../../api/api';

import { setErrorMessage, getTasks } from '../../reduxBase/actions/';

export default function* clearTasksList(action) {
  const api = new Api();
  const deleteData = {
  	category: action.category,
  	isDone: action.isDone
  };
  try {
    yield call(api.remove, `/deleteTask/${action.userId}`, deleteData);
  } catch (response) {
    yield put(setErrorMessage(response.error));
    return;
  }

  yield put(getTasks(action.userId));
}
