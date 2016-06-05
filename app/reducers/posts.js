'use strict';

import { FETCH_POSTS_SUCCEED } from '../actions';

export const loadUserDate = (user) => {
  return user;
}

const initialState = {};

export default function(state = initialState, { type, value }) {

  switch(type) {

  case FETCH_POSTS_SUCCEED:
    return {
      ...state,
      ...loadUserDate(value),
    };

  default:
    return state;
  }
};
