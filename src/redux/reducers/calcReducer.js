import { createReducer } from "@reduxjs/toolkit";
import {
  clearState,
  // getRecomends,
  // setError,
  // setUserInfo,
  toggleModal,
  getRecomendsSuccess,
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
    [getRecomendsSuccess]: (state, action) => {
      return {
        ...state,
        dailyRate: action.payload.dailyRate,
        notAllowed: [...action.payload.notAllowedProducts],
      };
    },
    // [setError]: (state, action) => {
    //   return {
    //     ...state,
    //     error: action.error,
    //   };
    // },
    [toggleModal]: (state, action) => {
      // console.log(action);
      return {
        ...state,
        modal: !state.modal,
      };
    },
    [clearState]: (state, action) => {
      return { ...initialState };
    },
  }
);

export default calcReducer;
