import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./globalSlice"; // assuming this is the path to your slice

const store = configureStore({
  reducer: {
    global: globalReducer,
    // ... other reducers
  },
});

export default store;
