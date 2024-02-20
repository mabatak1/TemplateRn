import { put, call } from 'redux-saga/effects';
import { apiPost } from '../../Services/serviceHandle';
import serviceUrls from '../../Services/serviceUrls';
import * as userActions from '../Actions/userActions';
import _ from 'lodash';

export function* login(payload: any) {
  const url = serviceUrls.url.login;
  try {
    const response: {
      errorMessage: string;
      detail: any;
      error: boolean;
      response?: any;
    } = yield call(apiPost, url, payload.body);
    if (response.error && !_.isEmpty(response.detail)) {
      yield put(userActions.loginFailed(response.detail));
    } else {
      yield put(userActions.loginSuccess(response.response, payload.keepLogin, payload.body));
    }
  } catch (error) {
    yield put(userActions.loginFailed(error));
  }
}
