import { createReducer } from "@reduxjs/toolkit";
import { signUp } from "../actions/registerAction";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  email: "",
  id: "",
  username: "",
};

const RegisterReducer = createReducer(
  { ...initialState },
  {
    [signUp]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  }
);

const authPersistConfig = {
  key: "register",
  storage,
};

export default persistReducer(authPersistConfig, RegisterReducer);
