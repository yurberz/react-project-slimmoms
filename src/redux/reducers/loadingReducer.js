import { createReducer } from "@reduxjs/toolkit";
import {
  getRecomendsRequest,
  getRecomendsSuccess,
  getRecomendsError,
} from "../actions/calcAction";
import {
  chngRecomendseError,
  chngRecomendsRequest,
  chngRecomendsSuccess,
  newTknError,
  newTknRequest,
  newTknSuccess,
} from "../actions/logInAction";

import getUserInfoActions from "../actions/getUserInfoActions";
import {
  addProductError,
  addProductRequest,
  addProductSuccess,
  deleteProductError,
  deleteProductRequest,
  deleteProductSuccess,
  getCurentDayInfoError,
  getCurentDayInfoRequest,
  getCurentDayInfoSuccess,
  searchProductError,
  searchProductRequest,
  searchProductSuccess,
} from "../actions/diaryActions";

export const loadingReducer = createReducer(false, {
  [getRecomendsRequest]: () => true,
  [getRecomendsSuccess]: () => false,
  [getRecomendsError]: () => false,

  [chngRecomendsRequest]: () => true,
  [chngRecomendsSuccess]: () => false,
  [chngRecomendseError]: () => false,

  [getUserInfoActions.getUserInfoRequest]: () => true,
  [getUserInfoActions.getUserInfoSuccess]: () => false,
  [getUserInfoActions.getUserInfoError]: () => false,

  [searchProductRequest]: () => true,
  [searchProductSuccess]: () => false,
  [searchProductError]: () => false,

  [addProductRequest]: () => true,
  [addProductSuccess]: () => false,
  [addProductError]: () => false,

  [deleteProductRequest]: () => true,
  [deleteProductSuccess]: () => false,
  [deleteProductError]: () => false,

  [getCurentDayInfoRequest]: () => true,
  [getCurentDayInfoSuccess]: () => false,
  [getCurentDayInfoError]: () => false,

  [newTknRequest]: () => true,
  [newTknSuccess]: () => false,
  [newTknError]: () => false,
});
