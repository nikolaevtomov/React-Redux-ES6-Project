'use strict';

import { FETCH_SPECIES_SUCCEED } from '../../actions';

export const loadSpeciesDate = (value) => {
  return value;
}

const initialState = {};

export default function(state = initialState, { type, value }) {

  switch(type) {

  case FETCH_SPECIES_SUCCEED:
    return {
      ...state,
      ...loadSpeciesDate(value)
    };

  default:
    return state;
  }
};
