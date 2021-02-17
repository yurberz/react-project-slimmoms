import { createReducer } from "@reduxjs/toolkit";
import {
  getRecomends,
  setError,
  setLoading,
  setUserInfo,
} from "../actions/calcAction";

const initialState = {
  userInfo: {},
  recomends: [],
  data: "",
  error: "",
  loading: false,
};

export const calcReducer = createReducer(
  { ...initialState },
  {
    [setUserInfo]: (state, action) => {
      return {
        ...state,
        userInfo: { ...action.payload },
      };
    },
    [getRecomends]: (state, action) => {
      return {
        ...state,
        recomends: { ...action.payload },
      };
    },
    [setError]: (state, action) => {
      return {
        ...state,
        error: action.error,
      };
    },
    [setLoading]: (state) => {
      return {
        ...state,
        loading: !state.loading,
      };
    },
  }
);

export default calcReducer;
