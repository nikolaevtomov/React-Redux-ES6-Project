'use strict';

const typeValueAction = type => value => ({ type, value });

export const APP_LOADING = 'APP_LOADING';
export const appLoading = typeValueAction(APP_LOADING);

export const APP_LOADING_STARTED = 'APP_LOADING_STARTED';
export const appLoadingStarted = typeValueAction(APP_LOADING_STARTED);

export const APP_LOADING_FAILED = 'APP_LOADING_FAILED';
export const appLoadingFailed = typeValueAction(APP_LOADING_FAILED);

export const APP_LOADING_SUCCEED = 'APP_LOADING_SUCCEED';
export const appLoadingSucceed = typeValueAction(APP_LOADING_SUCCEED);

export const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY';
export const toggleVisibility = typeValueAction(TOGGLE_VISIBILITY);

export const FETCH_PEOPLE_SUCCEED = 'FETCH_PEOPLE_SUCCEED';
export const fetchPeopleSucceed = typeValueAction(FETCH_PEOPLE_SUCCEED);

export const FETCH_PLANETS_SUCCEED = 'FETCH_PLANETS_SUCCEED';
export const fetchPlanetsSucceed = typeValueAction(FETCH_PLANETS_SUCCEED);

export const FETCH_FILMS_SUCCEED = 'FETCH_FILMS_SUCCEED';
export const fetchFilmsSucceed = typeValueAction(FETCH_FILMS_SUCCEED);

export const FETCH_SPECIES_SUCCEED = 'FETCH_SPECIES_SUCCEED';
export const fetchSpeciesSucceed = typeValueAction(FETCH_SPECIES_SUCCEED);

export const FETCH_VEHICLES_SUCCEED = 'FETCH_VEHICLES_SUCCEED';
export const fetchVehiclesSucceed = typeValueAction(FETCH_VEHICLES_SUCCEED);

export const FETCH_STARSHIPS_SUCCEED = 'FETCH_STARSHIPS_SUCCEED';
export const fetchStarshipsSucceed = typeValueAction(FETCH_STARSHIPS_SUCCEED);


export const START_LOGIN = 'START_LOGIN';
export const startLogin = typeValueAction(START_LOGIN);
export const START_LOGOUT = 'START_LOGOUT';
export const startLogout = typeValueAction(START_LOGOUT);
