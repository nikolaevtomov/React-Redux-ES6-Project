'use strict';

import { SAMPLE_SHOW, SAMPLE_HIDE } from '../actions/index';

export const initialState = false;

export default (state = initialState, { type }) => {
  switch (type) {
    case SAMPLE_SHOW:
      return true;
    case SAMPLE_HIDE:
      return false;
    default:
      return state;
  }
}
