import { createReducer } from "@reduxjs/toolkit";
import { signIn, setErrorr } from "../actions/logInAction";
import { logOut } from "../actions/logOutAction";
import getUserInfoActions from "../actions/getUserInfoActions";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  error: "",
  accessToken: "",
  refreshToken: "",
  sid: "",
  user: {
    email: "",
    username: "",
    id: "",
    dailyRate: null,
    userData: {
      notAllowedProducts: [],
      weight: 0,
      height: 0,
      age: 0,
      bloodType: 0,
      desiredWeight: 0,
      dailyRate: 0,
    },
    eatenProducts: [],
    daySummary: {},
    currentDayId: null,
    currentDay: null,
    summaries: [],
  },
};

const logInReducer = createReducer(
  { ...initialState },
  {
    [signIn]: (state, { payload }) => ({
      // accessToken: action.payload.accessToken,
      // refreshToken: action.payload.refreshToken,
      // sid: action.payload.sid,
      // userId: action.payload.user,
      ...payload,
      error: "",
    }),
    [signIn]: (_, { payload }) => payload.logInReducer.user,
    [setErrorr]: (state, action) => ({
      ...initialState,
      error: action.payload,
    }),
    [logOut]: (state, action) => ({
      // ...state,
      ...initialState,
    }),
    [getUserInfoActions.getUserInfoSuccess]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  }
);

const authPersistConfig = {
  key: "logIn",
  storage,
  // whitelist: ["accessToken", "refreshToken", "sid"],
};

export default persistReducer(authPersistConfig, logInReducer);
