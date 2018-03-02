import { put, call } from 'redux-saga/effects';
import Api from '../../api/api';

import { setErrorMessage } from '../../reduxBase/actions/';

export default function* deleteTask(action) {
  const api = new Api();
  const deleteData = {id: action.taskId};
  try {
    yield call(api.remove, `/deleteTask/${action.userId}`, deleteData);
  } catch (response) {
    yield put(setErrorMessage(response.error));
    return;
  }
}
