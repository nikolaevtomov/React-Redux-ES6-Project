'use strict';

import { APP_LOADING, APP_LOADING_SUCCEED, APP_LOADING_FAILED } from '../../actions';

export const setInitialState = () => {
  let state = {};

  return {
    ...state,
    loading: true,
  };
};

export const initialState = setInitialState();

export default function(state = initialState, { type }) {

  switch (type) {

  case APP_LOADING:
    return { ...state, loading: true };

  case APP_LOADING_SUCCEED:
    return { ...state, loading: false };

  case APP_LOADING_FAILED:
    return state;

  default:
    return state;
  }
};
