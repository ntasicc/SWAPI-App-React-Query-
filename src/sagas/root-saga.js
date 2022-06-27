import { spawn } from "redux-saga/effects";
import { watchFetchFilmsDataSaga } from "./films-saga";
import { watchFetchPlanetSaga } from "./planet-saga";
import { watchFetchSWDataSaga } from "./sw-saga";

export default function* rootSaga() {
  yield spawn(watchFetchSWDataSaga);
  yield spawn(watchFetchFilmsDataSaga);
  yield spawn(watchFetchPlanetSaga);
}
