import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import swDataSlice from "./swData-slice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/root-saga";
import filmsSlice from "./films-slice";
import characterSlice from "./character-slice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    swData: swDataSlice.reducer,
    filmsData: filmsSlice.reducer,
    character: characterSlice.reducer,
  },
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
