import { call, put, take, fork } from "redux-saga/effects";
import { characterActions } from "../store/character-slice";
import axios from "axios";

export function* fetchPlanetSaga(planetURL) {
  try {
    yield put(characterActions.isLoading());
    const response = yield call(axios.get, planetURL);
    yield put(characterActions.addHomeworld(response.data));
  } catch (error) {
    yield put(characterActions.setError());
  }
}

export function* watchFetchPlanetSaga() {
  while (true) {
    const req = yield take("FETCH_PLANET");
    yield fork(fetchPlanetSaga, req.payload);
  }
}
