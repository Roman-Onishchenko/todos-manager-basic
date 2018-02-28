import { put, call } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import Api from '../../api/api';

import { setErrorMessage, addUser } from '../../reduxBase/actions/';

export default function* userRegister(action) {
  const api = new Api();
  const newUser = action.user.toJS();
  console.log('saga', newUser);
  let user;
  try {
    const response = yield call(api.save, '/createUser', newUser);
    user = fromJS(response.data);
  } catch (response) {
    yield put(setErrorMessage(response.error));
    return;
  }
  
  yield put(addUser(user));
}
