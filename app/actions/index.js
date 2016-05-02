'use strict';

const typeValueAction = type => value => ({type, value});

export const APP_LOADING = 'APP_LOADING';
export const appLoading = typeValueAction(APP_LOADING);

export const APP_LOADED = 'APP_LOADED';
export const appLoaded = typeValueAction(APP_LOADED);

export const SAMPLE_SHOW = 'SAMPLE_SHOW';
export const sampleShow = typeValueAction(SAMPLE_SHOW);

export const SAMPLE_HIDE = 'SAMPLE_HIDE';
export const sampleHide = typeValueAction(SAMPLE_HIDE);
