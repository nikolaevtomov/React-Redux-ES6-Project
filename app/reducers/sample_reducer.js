'use strict';

import { SAMPLE_SHOW, SAMPLE_HIDE } from '../actions/index';


export const initialState = {
  sampleShowHide: false,
};

export default (state = initialState, { type, value }) => {

  switch (type) {

    case SAMPLE_SHOW:
      return { ...state, sampleShowHide: true };

    case SAMPLE_HIDE:
      return { ...state, sampleShowHide: false };

    default:
      return state;
  }
}
