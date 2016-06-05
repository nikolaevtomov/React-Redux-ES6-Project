'use strict';

const typeValueAction = type => value => ({ type, value });

export const APP_LOADING = 'APP_LOADING';
export const appLoading = typeValueAction(APP_LOADING);

export const APP_LOADING_STARTED = 'APP_LOADING_STARTED';
export const appLoadingStarted = typeValueAction(APP_LOADING_STARTED);

export const APP_LOADING_FAILED = 'APP_LOADING_FAILED';
export const appLoadingFailed = typeValueAction(APP_LOADING_FAILED);

export const APP_LOADING_SUCCEED = 'APP_LOADING_SUCCEED';
export const appLoadingSucceed = typeValueAction(APP_LOADING_SUCCEED);

export const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY';
export const toggleVisibility = typeValueAction(TOGGLE_VISIBILITY);

export const FETCH_POSTS_SUCCEED = 'FETCH_POSTS_SUCCEED';
export const fetchPostsSucceed = typeValueAction(FETCH_POSTS_SUCCEED);
