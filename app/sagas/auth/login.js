
import { takeLatest, takeEvery }                from 'redux-saga';
import { apply, call, fork, put, take, select } from 'redux-saga/effects';
import { fetchPostLogin }                       from '../../services/api';
import { push }                                 from 'react-router-redux';

import {
  LOGIN_SUBMIT_BEGIN,
  loginSubmitSuccess,
  loginSubmitFailed,
 } from '../../actions';

export default function* watchUserLogin() {
  yield takeLatest(LOGIN_SUBMIT_BEGIN, function* watch() {
    try {
      const info = yield select(state => state.form['Log-In-Form']);

      const response = yield call(fetchPostLogin, {
        email: info.email.value,
        password: info.password.value,
      });

      if(!response.error) {
        console.log(response);
        yield put(loginSubmitSuccess(response));
        yield put(push('/'));

      } else {
        yield put(loginSubmitFailed(response));
      }
    }
    catch (error) {
      console.log('loginSubmitFailed() ', response.token);
      yield put(loginSubmitFailed(response.token));
    }
  });
}
