import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { directoryReducer } from "./reducers/directoryReducer";

const rootReducer = combineReducers({
  allDirectory: directoryReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
