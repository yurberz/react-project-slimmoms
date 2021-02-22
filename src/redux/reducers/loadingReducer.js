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
} from "../actions/logInAction";

import getUserInfoActions from "../actions/getUserInfoActions";

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
});
