'use strict';

import { FETCH_VEHICLES_SUCCEED } from '../../actions';

export const loadVehiclesDate = (value) => {
  return value;
}

const initialState = {};

export default function(state = initialState, { type, value }) {

  switch(type) {

  case FETCH_VEHICLES_SUCCEED:
    return {
      ...state,
      ...loadVehiclesDate(value)
    };

  default:
    return state;
  }
};
