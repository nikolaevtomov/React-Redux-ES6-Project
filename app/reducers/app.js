'use strict';

import { APP_LOADING, APP_LOADED } from '../actions';

export const getInitialState = () => {
  let state = {};

  return {
    ...state,
    loading: true,
  };
};

export const initialState = getInitialState();

export default function(state = initialState, { type }) {

  switch (type) {

  case APP_LOADING:
    return { ...state, loading: true };

  case APP_LOADED:
    return { ...state, loading: false };

  default:
    return state;

  }
};
