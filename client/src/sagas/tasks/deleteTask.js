import { put, call } from 'redux-saga/effects';
import Api from '../../api/api';

import { setErrorMessage } from '../../reduxBase/actions/';

export default function* deleteUser(action) {
  const api = new Api();
  try {
    yield call(api.remove, `protected/user/${action.userId}`);
  } catch (response) {
    yield put(setErrorMessage('Error remove task'));
    return;
  }
}
