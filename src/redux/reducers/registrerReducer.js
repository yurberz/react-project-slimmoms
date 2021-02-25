import { createReducer } from "@reduxjs/toolkit";
import { signUp, setError } from "../actions/registerAction";
import { logOut } from "../actions/logOutAction";

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
      ...initialState,
      error: action.payload,
    }),
  }
);

export default RegisterReducer;
