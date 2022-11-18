import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  directoryReducer,
  childDirectoryReducer,
} from "./reducers/directoryReducer";

const rootReducer = combineReducers({
  allDirectory: directoryReducer,
  childDirectory: childDirectoryReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
