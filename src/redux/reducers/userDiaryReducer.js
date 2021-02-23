import { createReducer, combineReducers } from "@reduxjs/toolkit";
import moment from "moment";

import {
  resetList,
  searchProductSuccess,
  addProductSuccess,
  deleteProductSuccess,
  getCurentDayInfoSuccess,
} from "../actions/diaryActions";
import getUserInfoActions from "../actions/getUserInfoActions";

const initialState = {
  productsFound: [],
  eatenProducts: [],
  daySummary: {
    date: moment(Date.now()).format("YYYY-MM-DD"),
    kcalLeft: 0,
    kcalConsumed: 0,
    dailyRate: 0,
    percentsOfDailyRate: 0,
  },
  dayId: "",
  curentDate: moment(Date.now()).format("YYYY-MM-DD"),
};

const formDiaryReducer = createReducer(initialState, {
  [searchProductSuccess]: (state, { payload }) => ({
    ...state,
    productsFound: [...payload],
  }),
  [resetList]: (state, { payload }) => ({
    ...state,
    productsFound: [],
  }),

  [addProductSuccess]: (state, { payload }) => ({
    ...state,
    daySummary: payload.daySummary,
    eatenProducts: [...state.eatenProducts, payload.eatenProduct],
  }),

  [deleteProductSuccess]: (state, { payload }) => ({
    ...state,
    eatenProducts: [
      ...state.eatenProducts.filter(
        (product) => product.id !== payload.eatenProductId
      ),
    ],
    daySummary: payload.newDaySummary,
  }),

  [getCurentDayInfoSuccess]: (state, { payload }) => ({
    ...state,
    eatenProducts: payload.eatenProducts ? payload.eatenProducts : [],
    daySummary: payload.daySummary ? payload.daySummary : {},
    dayId: payload.id,
  }),
  [getUserInfoActions.getUserInfoSuccess]: (state, { payload }) => {
    const summary = payload.days.length
      ? payload.days.find((elem) => elem?.date === state.curentDate).daySummary
      : {};
    return {
      ...state,
      daySummary: {
        ...summary,
        dailyRate: payload.userData.dailyRate,
      },
    };
  },
});

const userDiaryReducer = combineReducers({
  user: formDiaryReducer,
});

export default userDiaryReducer;
