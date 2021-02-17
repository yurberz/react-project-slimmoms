import { createReducer } from "@reduxjs/toolkit";
import { signUp } from "../actions/registerAction";
import { logOut } from "../actions/logOutAction";
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
    [logOut]: (state, action) => ({
      ...state,
      ...initialState,
    }),
  }
);

// const authPersistConfig = {
//   key: "register",
//   storage,
// };

export default RegisterReducer;
