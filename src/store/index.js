import { configureStore } from "@reduxjs/toolkit";
import swDataSlice from "./swData-slice";

import filmsSlice from "./films-slice";
import characterSlice from "./character-slice";

const store = configureStore({
  reducer: {
    swData: swDataSlice.reducer,
    filmsData: filmsSlice.reducer,
    character: characterSlice.reducer,
  },
});

export default store;
