import { createReducer } from "@reduxjs/toolkit";
import {
  signIn,
  setErrorr,
  chngRecomendsSuccess,
  chngParams,
  newTknSuccess,
  setLoading,
} from "../actions/logInAction";

import { logOut } from "../actions/logOutAction";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  error: "",
  isLoading: false,
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
      ...action.payload,
      error: "",
    }),
    [setErrorr]: (state, action) => ({
      ...initialState,
      error: action.payload,
    }),
    [logOut]: (state, action) => ({
      ...initialState,
    }),
    [setLoading]: (state, action) => ({
      isLoading: true,
    }),

    [newTknSuccess]: (state, { payload }) => ({
      ...state,
      accessToken: payload.newAccessToken,
      refreshToken: payload.newRefreshToken,
      sid: payload.sid,
    }),

    //==========================================
    [chngRecomendsSuccess]: (state, action) => {
      return {
        ...state,
        user: {
          ...state.user,
          userData: { ...state.user.userData, ...action.payload },
        },
      };
    },
    [chngParams]: (state, action) => {
      return {
        ...state,
        user: {
          ...state.user,
          userData: { ...state.user.userData, ...action.payload },
        },
      };
    },
  }
);

const authPersistConfig = {
  key: "logIn",
  storage,
};

export default persistReducer(
  authPersistConfig,
  logInReducer,
  chngRecomendsSuccess,
  chngParams
);
