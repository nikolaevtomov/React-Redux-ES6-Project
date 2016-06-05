import { takeLatest, takeEvery }        from 'redux-saga';
import { apply, call, fork, put, take } from 'redux-saga/effects';

import { getPosts }                     from './services/api';

import {
  APP_LOADING_STARTED,
  appLoadingFailed,
  appLoadingSucceed,
  fetchPostsSucceed
} from './actions';

export function* initializeAppState() {
  try {

    const [ posts, posts2 ] = yield Promise.all([
      getPosts(),
      getPosts()
    ]);

    // const [ posts, posts2 ]  = yield [
    //   call(request, path),
    //   call(request, path)
    // ]

    yield put(fetchPostsSucceed(posts.data));
    yield put(fetchPostsSucceed(posts2.data));
    yield put(appLoadingSucceed());

  } catch (error) {
    console.log('PROMISE: ' + error)
    yield put(appLoadingFailed());
  }
}

export function* watchInitializeAppState() {
  yield* takeLatest(APP_LOADING_STARTED, initializeAppState);
}

export default function* startForeman() {
  yield fork(watchInitializeAppState)
}
