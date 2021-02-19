import { createReducer } from "@reduxjs/toolkit";
import {
  clearState,
  getRecomends,
  setError,
  // setUserInfo,
  toggleModal,
} from "../actions/calcAction";

const initialState = {
  // userInfo: {},
  notAllowed: [],
  dailyRate: "",
  error: "",
  modal: false,
  // userResponse: {},
};

export const calcReducer = createReducer(
  { ...initialState },
  {
    // [setUserInfo]: (state, action) => {
    //   return {
    //     ...state,
    //     userInfo: { ...action.payload },
    //   };
    // },
    [getRecomends]: (state, action) => {
      return {
        ...state,
        dailyRate: action.payload.dailyRate,
        notAllowed: [...action.payload.notAllowedProducts],
      };
    },
    [setError]: (state, action) => {
      return {
        ...state,
        error: action.error,
      };
    },
    [toggleModal]: (state) => ({
      ...state,
      modal: !state.modal,
    }),
    [clearState]: (state, action) => {
      // console.log("ochishchau");
      return { ...initialState };
    },
  }
);

export default calcReducer;
