
import { takeLatest, takeEvery }                from 'redux-saga';
import { apply, call, fork, put, take, select } from 'redux-saga/effects';
import { getAuthRegister }                      from '../../services/api';
import { push }                                 from 'react-router-redux';

import {
  REGISTER_SUBMIT_BEGIN,
  registerSubmitSuccess,
  registerSubmitFailed,
 } from '../../actions';

export default function* watchUserRegister() {
  yield takeLatest(REGISTER_SUBMIT_BEGIN, function* watch() {
    try {
      const info = yield select(state => state.form['Register-Form']);

      const result = yield call(getAuthRegister, {
        name: info.name.value,
        surname: info.surname.value,
        email: info.email.value,
        password: info.password.value,
      });

      if(true) {
        console.log(result.response);
        yield put(registerSubmitSuccess(result));
        yield put(push('/'));

      } else {
        console.log(result.response);
        yield put(registerSubmitFailed(result));
      }
    }
    catch (error) {
      console.log('registerSubmitFailed() ', result);
      yield put(registerSubmitFailed(result));
    }
  });
}
