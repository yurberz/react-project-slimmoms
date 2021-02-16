import { createReducer } from "@reduxjs/toolkit";
import { signUp } from "../actions/registerAction";

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

export default RegisterReducer;
