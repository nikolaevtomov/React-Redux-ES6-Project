
import { takeLatest, takeEvery }                from 'redux-saga';
import { apply, call, fork, put, take, select } from 'redux-saga/effects';
import { getAuthLogin }                         from '../../services/api';
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

      const result = yield call(getAuthLogin, {
        email: info.email.value,
        password: info.password.value,
      });

      if(!result.error) {
        console.log(result);
        yield put(loginSubmitSuccess(result.response));
        yield put(push('/'));

      } else {
        console.log(result.response);
        yield put(loginSubmitFailed(result.response));
      }
    }
    catch (error) {
      console.log('loginSubmitFailed() ', result);
      yield put(loginSubmitFailed(result));
    }
  });
}
