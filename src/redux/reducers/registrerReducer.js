import { createReducer } from "@reduxjs/toolkit";
import { signUp, setError } from "../actions/registerAction";
import { logOut } from "../actions/logOutAction";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  email: "",
  id: "",
  username: "",
  error: "",
};

const RegisterReducer = createReducer(
  { ...initialState },
  {
    [signUp]: (state, action) => ({
      ...state,
      ...action.payload,
      error: "",
    }),
    [logOut]: (state, action) => ({
      ...state,
      ...initialState,
    }),
    [setError]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  }
);

export default RegisterReducer;
