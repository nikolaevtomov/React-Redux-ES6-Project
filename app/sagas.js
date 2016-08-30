import { takeLatest, takeEvery }        from 'redux-saga';
import { apply, call, fork, put, take, select } from 'redux-saga/effects';

import {
  userFunction,
  getPeople,
  getPlanets,
  getFilms,
  getSpecies,
  getVehicles,
  getStarships
} from './services/api';

import {
  APP_LOADING_STARTED,
  START_LOGIN,
  appLoadingFailed,
  appLoadingSucceed,
  fetchPeopleSucceed,
  fetchPlanetsSucceed,
  fetchFilmsSucceed,
  fetchSpeciesSucceed,
  fetchVehiclesSucceed,
  fetchStarshipsSucceed
} from './actions';

export function* initializeAppState() {
  try {

    const [ people, planets, films, species, vehicles, starships ] = yield Promise.all([
      getPeople(),
      getPlanets(),
      getFilms(),
      getSpecies(),
      getVehicles(),
      getStarships()
    ]);

    yield put(fetchPeopleSucceed(people.results));
    yield put(fetchPlanetsSucceed(planets.results));
    yield put(fetchFilmsSucceed(films.results));
    yield put(fetchSpeciesSucceed(species.results));
    yield put(fetchVehiclesSucceed(vehicles.results));
    yield put(fetchStarshipsSucceed(starships.results));
    yield put(appLoadingSucceed());

  } catch (error) {
    console.log(error);
    yield put(appLoadingFailed());
  }
}

export function* initializeUserLogin() {
  try {

    const user = yield select((state) => (state.entities.user.info));

    const result = yield call(userFunction, {
      email: user.email,
      password: user.password,
    });

    // yield put(fetchPeopleSucceed(people.results));

  } catch (error) {
    console.log(error);
    // yield put(appLoadingFailed());
  }
}

export function* watchInitializeAppState() {
  yield* takeLatest(APP_LOADING_STARTED, initializeAppState);
}
export function* watchUserLogin() {
  yield* takeLatest(START_LOGIN, initializeUserLogin);
}

export default function* startForeman() {
  yield fork(watchInitializeAppState);
  yield fork(watchUserLogin);
}
