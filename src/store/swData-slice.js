import { createSlice } from "@reduxjs/toolkit";

const swDataSlice = createSlice({
  name: "swData",
  initialState: {
    next: "",
    previous: "",
    results: [],
    customCharacters: [],
    isLoading: false,
    errorOccurred: false,
  },
  reducers: {
    addNewData(state, action) {
      state.next = action.payload.next;
      state.previous = action.payload.previous;
      const newData = action.payload.results.map((entry, i) => {
        return { id: i, fromDB: true, ...entry };
      });
      state.results = newData;
      state.isLoading = false;
      state.errorOccurred = false;
    },
    deleteCharacter(state, action) {
      if (action.payload.fromDB)
        state.results = state.results.filter(
          (entry) => entry.id !== action.payload.characterID
        );
      else
        state.customCharacters = state.customCharacters.filter(
          (entry) => entry.id !== action.payload.characterID
        );
    },
    addCustomCharacter(state, action) {
      state.customCharacters = [
        ...state.customCharacters,
        { id: state.count, ...action.payload },
      ];
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

export const swDataActions = swDataSlice.actions;

export default swDataSlice;
