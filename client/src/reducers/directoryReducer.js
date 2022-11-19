import { createSlice } from "@reduxjs/toolkit";

const allDirectorySlice = createSlice({
  name: "directory",
  initialState: {
    data: [],
  },

  reducers: {
    directoryFetch: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { directoryFetch } = allDirectorySlice.actions;

export const directoryReducer = allDirectorySlice.reducer;
