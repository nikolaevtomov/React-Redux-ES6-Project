'use strict';

import { FETCH_STARSHIPS_SUCCEED } from '../../actions';

export const loadStarshipsDate = (value) => {
  return value;
}

const initialState = {};

export default function(state = initialState, { type, value }) {

  switch(type) {

  case FETCH_STARSHIPS_SUCCEED:
    return {
      ...state,
      ...loadStarshipsDate(value)
    };

  default:
    return state;
  }
};
