import _ from 'lodash';
import { call, put, select } from 'redux-saga/effects';

import Api from '../../api/api';

import {
  setErrorMessage,
  hideTaskModal,
} from '../../reduxBase/actions/';

export default function* updateTask(action) {
  const api = new Api();
  const task = yield select((state) => state.get('page').get('users').find((item) => item.id === action.userId));
  try {
    yield call(api.save, '/task', _.merge(task.toApiObject(), { id: task.get('id')}));
  } catch (response) {
    yield put(setErrorMessage('Error saving task'));
    return;
  }
  yield put(hideTaskModal());
}
