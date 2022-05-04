import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { bannerReducer, deviceReducer } from "./reducers";

const reducer = combineReducers({
  banner: bannerReducer,
  device: deviceReducer,
});

export const makeStore = () =>
  configureStore({
    reducer,
  });

export const wrapper = createWrapper(makeStore, { debug: true });
