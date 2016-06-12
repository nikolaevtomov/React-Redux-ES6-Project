'use strict';

import { FETCH_PEOPLE_SUCCEED } from '../../actions';

export const loadPeopleData = (value) => {
  return value;
}

const initialState = {};

export default function(state = initialState, { type, value }) {

  switch(type) {

  case FETCH_PEOPLE_SUCCEED:
    return {
      ...state,
      ...loadPeopleData(value),
    };

  default:
    return state;
  }
};
