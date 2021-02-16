import { createReducer } from "@reduxjs/toolkit";
import { signIn } from "../actions/logInAction";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  accessToken: "",
  refreshToken: "",
  sid: "",
};

const logInReducer = createReducer(
  { ...initialState },
  {
    [signIn]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  }
);

const authPersistConfig = {
  key: "logIn",
  storage,
  whitelist: ["accessToken", "refreshToken", "sid"],
};

export default persistReducer(authPersistConfig, logInReducer);
