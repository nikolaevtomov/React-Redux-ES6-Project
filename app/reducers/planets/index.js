'use strict';

import { FETCH_PLANETS_SUCCEED } from '../../actions';

export const loadPlanetsDate = (value) => {
  return value;
}

const initialState = {};

export default function(state = initialState, { type, value }) {

  switch(type) {

  case FETCH_PLANETS_SUCCEED:
    return {
      ...state,
      ...loadPlanetsDate(value),
    };

  default:
    return state;
  }
};
