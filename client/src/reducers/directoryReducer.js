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

const childDirectorySlice = createSlice({
  name: "childDirectory",
  initialState: {
    childData: [],
  },

  reducers: {
    child_directory_fetch: (state, action) => {
      state.childData = action.payload;
    },
  },
});

export const { directoryFetch } = allDirectorySlice.actions;
export const { child_directory_fetch } = childDirectorySlice.actions;

export const directoryReducer = allDirectorySlice.reducer;
export const childDirectoryReducer = childDirectorySlice.reducer;
