import { put, call } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import Api from '../../api/api';

import { setErrorMessage, setUser, userNotAuth} from '../../reduxBase/actions/';

export default function* userAuthAttempt(action) {
  const api = new Api();
  const authUser = action.user.toJS();
  let user;
  try {
    const response = yield call(api.save, '/authUser', authUser);
    if(response.data.notAuth) {
      yield put(userNotAuth());
    } else {
      user = fromJS(response.data);
      const authUser = fromJS({
        id: user.get('id'),
        login: user.get('login')
      });
      yield put(setUser(authUser));
    }
  } catch (response) {
    yield put(setErrorMessage(response.error));
    return;
  }
  
}
