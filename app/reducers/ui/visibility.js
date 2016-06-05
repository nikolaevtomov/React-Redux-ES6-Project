'use strict';

import { TOGGLE_VISIBILITY } from '../../actions';

export const initialState = false;

export default (state = initialState, { type, value }) => {

  switch (type) {

    case TOGGLE_VISIBILITY:
      return !state;

    default:
      return state;
  }
};
