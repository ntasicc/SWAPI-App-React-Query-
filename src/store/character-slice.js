import { createSlice } from "@reduxjs/toolkit";

const characterSlice = createSlice({
  name: "character",
  initialState: {
    characterData: null,
    homeworld: null,
    isLoading: false,
    errorOccurred: false,
  },
  reducers: {
    addCharacter(state, action) {
      state.characterData = action.payload;
      state.homeworld = null;
    },
    addHomeworld(state, action) {
      state.homeworld = action.payload;
      state.isLoading = false;
      state.errorOccurred = false;
    },
    isLoading(state) {
      state.isLoading = true;
    },
    setError(state) {
      state.errorOccurred = true;
      state.isLoading = false;
    },
  },
});

export const characterActions = characterSlice.actions;
export default characterSlice;
