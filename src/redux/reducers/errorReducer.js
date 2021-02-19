import { createReducer } from "@reduxjs/toolkit";
import { getRecomendsError } from "../actions/calcAction";
import { chngRecomendseError } from "../actions/logInAction";

export const errorReducer = createReducer(null, {
  [getRecomendsError]: (state, { payload }) => payload,
  [chngRecomendseError]: (state, { payload }) => payload,
});
