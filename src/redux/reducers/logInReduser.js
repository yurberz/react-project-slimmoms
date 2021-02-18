import { createReducer } from "@reduxjs/toolkit";
import { signIn } from "../actions/logInAction";
import { logOut } from "../actions/logOutAction";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
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
    }),
    [logOut]: (state, action) => ({
      // ...state,
      ...initialState,
    }),
  }
);

const authPersistConfig = {
  key: "logIn",
  storage,
  // whitelist: ["accessToken", "refreshToken", "sid"],
};

export default persistReducer(authPersistConfig, logInReducer);
