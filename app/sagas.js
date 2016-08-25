import { takeLatest, takeEvery }        from 'redux-saga';
import { apply, call, fork, put, take } from 'redux-saga/effects';

import {
  getPeople,
  getPlanets,
  getFilms,
  getSpecies,
  getVehicles,
  getStarships
} from './services/api';

import {
  APP_LOADING_STARTED,
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

    yield put(fetchPeopleSucceed(people));
    yield put(fetchPlanetsSucceed(planets));
    yield put(fetchFilmsSucceed(films));
    yield put(fetchSpeciesSucceed(species));
    yield put(fetchVehiclesSucceed(vehicles));
    yield put(fetchStarshipsSucceed(starships));
    yield put(appLoadingSucceed());

  } catch (error) {
    console.log(error);
    yield put(appLoadingFailed());
  }
}

export function* watchInitializeAppState() {
  yield* takeLatest(APP_LOADING_STARTED, initializeAppState);
}

export default function* startForeman() {
  yield fork(watchInitializeAppState);
}
