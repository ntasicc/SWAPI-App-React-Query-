import { createSlice } from "@reduxjs/toolkit";

const filmsSlice = createSlice({
  name: "films",
  initialState: {
    filmsArray: [],
    isLoading: false,
    errorOccurred: false,
  },
  reducers: {
    addFilms(state, action) {
      state.filmsArray = action.payload;
      state.isLoading = false;
      state.errorOccurred = false;
    },
    isLoading(state) {
      state.isLoading = true;
      state.filmsArray = [];
      state.openFilmModule = true;
    },
    setError(state) {
      state.errorOccurred = true;
      state.isLoading = false;
    },
  },
});

export const filmsActions = filmsSlice.actions;
export default filmsSlice;
