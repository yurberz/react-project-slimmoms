import { createReducer } from "@reduxjs/toolkit";
import { getRecomendsError, getRecomendsRequest } from "../actions/calcAction";
import {
  chngRecomendseError,
  chngRecomendsRequest,
  newTknError,
  newTknRequest,
} from "../actions/logInAction";
import getUserInfoActions from "../actions/getUserInfoActions";
import {
  addProductError,
  addProductRequest,
  deleteProductError,
  deleteProductRequest,
  getCurentDayInfoError,
  getCurentDayInfoRequest,
  searchProductError,
  searchProductRequest,
} from "../actions/diaryActions";

export const errorReducer = createReducer(null, {
  [getRecomendsError]: (state, { payload }) => payload,
  [getRecomendsRequest]: () => null,
  [chngRecomendseError]: (state, { payload }) => payload,
  [chngRecomendsRequest]: () => null,
  [getUserInfoActions.getUserInfoError]: (_, { payload }) => payload,
  [getUserInfoActions.getUserInfoRequest]: () => null,
  [searchProductError]: (state, action) => action.payload,
  [searchProductRequest]: () => null,
  [addProductError]: (state, { payload }) => payload,
  [addProductRequest]: () => null,
  [deleteProductError]: (state, { payload }) => payload,
  [deleteProductRequest]: () => null,
  [getCurentDayInfoError]: (state, { payload }) => payload,
  [getCurentDayInfoRequest]: () => null,
  [newTknError]: (state, { payload }) => payload,
  [newTknRequest]: () => null,
});
