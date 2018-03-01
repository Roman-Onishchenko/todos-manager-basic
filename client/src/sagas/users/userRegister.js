import { put, call } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import Api from '../../api/api';

import { setErrorMessage, setUser, userExist } from '../../reduxBase/actions/';

export default function* userRegister(action) {
  const api = new Api();
  const newUser = action.user.toJS();
  let user;
  try {
    const response = yield call(api.save, '/createUser', newUser);
    if(response.data.userExist) {
      yield put(userExist());
    } else {
      user = fromJS(response.data);
      const newUser = fromJS({
        id: user.get('id'),
        login: user.get('login')
      });
      yield put(setUser(newUser));
    }
  } catch (response) {
    yield put(setErrorMessage(response.error));
    return;
  }
  
}
