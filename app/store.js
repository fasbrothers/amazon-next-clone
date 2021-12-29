import basketReducer from "../reducer/basketSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: basketReducer,
});
