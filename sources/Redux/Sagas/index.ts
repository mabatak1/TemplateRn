import { takeEvery, all } from 'redux-saga/effects';
import actionTypes from '../ActionTypes';
import * as userSaga from './userSaga';

export default function* watch() {
  yield all([takeEvery(actionTypes.LOGIN_REQUEST, userSaga.login)]);
}
