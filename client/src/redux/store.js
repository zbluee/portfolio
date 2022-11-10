import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./root-reduxer";

const middleware = process.env.NODE_ENV === "development" ? [logger] : [];

export const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
});
