import { createReducer } from "@reduxjs/toolkit";
import { getRecomendsError } from "../actions/calcAction";
import { chngRecomendseError, newTknError } from "../actions/logInAction";
import getUserInfoActions from "../actions/getUserInfoActions";
import {
  addProductError,
  deleteProductError,
  getCurentDayInfoError,
  searchProductError,
} from "../actions/diaryActions";

export const errorReducer = createReducer(null, {
  [getRecomendsError]: (state, { payload }) => payload,
  [chngRecomendseError]: (state, { payload }) => payload,
  [getUserInfoActions.getUserInfoError]: (_, { payload }) => payload,
  [searchProductError]: (state, action) => action.payload,
  [addProductError]: (state, { payload }) => payload,
  [deleteProductError]: (state, { payload }) => payload,
  [getCurentDayInfoError]: (state, { payload }) => payload,
  [newTknError]: (state, { payload }) => payload,
});
