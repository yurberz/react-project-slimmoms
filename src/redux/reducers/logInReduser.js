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
  todaySummary: {},
  user: {
    email: "",
    username: "",
    userData: {
      notAllowedProducts: [],
      weight: 0,
      height: 0,
      age: 0,
      bloodType: 0,
      desiredWeight: 0,
      dailyRate: 0,
    },
    id: "",
  },
};

const logInReducer = createReducer(
  { ...initialState },
  {
    [signIn]: (state, action) => ({
      // accessToken: action.payload.accessToken,
      // refreshToken: action.payload.refreshToken,
      // sid: action.payload.sid,
      // userId: action.payload.user,
      ...action.payload,
      error: "",
    }),
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
