
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
        // TODO: add response to success
        yield put(loginSubmitSuccess(/*response*/));
        yield put(push('/'));
      }
      else {
        // TODO: add response to faile case
        // TODO: define response.error: true in API
        // yield put(loginSubmitFailed(response));
        console.log('errorrrrr');
      }
    }
    catch (error) {
      console.log(error);
    }
  });
}
