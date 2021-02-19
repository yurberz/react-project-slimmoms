import { createReducer, combineReducers } from "@reduxjs/toolkit";
import getUserInfoActions from "../actions/getUserInfoActions";
import { logOut } from "../actions/logOutAction";

const initialState = {
  days: [],
  userData: {},
};

const getUserInfo = createReducer(initialState, {
  [getUserInfoActions.getUserInfoSuccess]: (_, { payload }) => ({
    userData: payload.userData,
    days: payload.days,
  }),
  [logOut]: () => initialState,
});

// const error = createReducer(null, {
//   [getUserInfoActions.getUserInfoError]: ({ payload }) => payload,
//   [getUserInfoActions.getUserInfoRequest]: () => null,
// });

const summInfo = combineReducers({
  user: getUserInfo,
  // error: error,
});

export default summInfo;
