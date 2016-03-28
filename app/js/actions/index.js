'use strict';

const typeValueAction = type => value => ({type, value});

export const SAMPLE_SHOW = 'SAMPLE_SHOW';
export const sampleShow = typeValueAction(SAMPLE_SHOW);

export const SAMPLE_HIDE = 'SAMPLE_HIDE';
export const sampleHide = typeValueAction(SAMPLE_HIDE);
