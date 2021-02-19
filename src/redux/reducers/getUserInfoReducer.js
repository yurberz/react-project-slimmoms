import { createReducer, combineReducers } from "@reduxjs/toolkit";
import getUserInfoActions from "../actions/getUserInfoActions";
import { logOut } from "../actions/logOutAction";
import moment from "moment";

const initialState = {
  days: [],
  userData: {},
  currentDayInfo: {
    date: moment(Date.now()).format("YYYY-MM-DD"),
    kcalLeft: 0,
    kcalConsumed: 0,
    dailyRate: 0,
    percentsOfDailyRate: 0,
  },
};

const getUserInfo = createReducer(initialState, {
  [getUserInfoActions.getUserInfoSuccess]: (state, { payload }) => {
    const summary = payload.days.length
      ? payload.days.find((elem) => elem?.date === state.currentDayInfo.date)
          .daySummary
      : {};
    return {
      userData: payload.userData,
      days: payload.days,
      currentDayInfo: {
        ...state.currentDayInfo,
        ...summary,
        dailyRate: payload.userData.dailyRate,
      },
    };
  },
  [logOut]: () => initialState,
});

const summInfo = combineReducers({
  user: getUserInfo,
});

export default summInfo;
