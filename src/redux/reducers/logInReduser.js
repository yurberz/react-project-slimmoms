import { createReducer } from "@reduxjs/toolkit";
import { signIn } from "../actions/logInAction";

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

export default logInReducer;
