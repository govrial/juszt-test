import { configureStore } from "@reduxjs/toolkit";
import {carsApi} from "./api/cars";

export const store = configureStore({
  reducer: {
    [carsApi.reducerPath]: carsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(carsApi.middleware),
  devTools: true,
});

export type AppState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
