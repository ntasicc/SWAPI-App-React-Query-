import { call, put, take, fork } from "redux-saga/effects";
import { swDataActions } from "../store/swData-slice";
import axios from "axios";

export function* fetchSWDataSaga(url) {
  try {
    yield put(swDataActions.isLoading());
    const response = yield call(axios.get, url);
    yield put(swDataActions.addNewData(response.data));
  } catch (error) {
    yield put(swDataActions.setError());
  }
}

export function* watchFetchSWDataSaga() {
  while (true) {
    const req = yield take("FETCH_SWDATA");
    yield fork(fetchSWDataSaga, req.payload);
  }
}
