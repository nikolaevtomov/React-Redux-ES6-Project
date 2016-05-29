'use strict';

const typeValueAction = type => value => ({type, value});

export const APP_LOADING = 'APP_LOADING';
export const appLoading = typeValueAction(APP_LOADING);

export const APP_LOADED = 'APP_LOADED';
export const appLoaded = typeValueAction(APP_LOADED);

export const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY';
export const toggleVisibility = typeValueAction(TOGGLE_VISIBILITY);
