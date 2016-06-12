'use strict';

import { FETCH_FILMS_SUCCEED } from '../../actions';

export const loadFilmsDate = (value) => {
  return value;
}

const initialState = {};

export default function(state = initialState, { type, value }) {

  switch(type) {

  case FETCH_FILMS_SUCCEED:
    return {
      ...state,
      ...loadFilmsDate(value)
    };

  default:
    return state;
  }
};
