import { createAction } from "@reduxjs/toolkit";

const getUserInfoRequest = createAction("/getUserRequest");
const getUserInfoSuccess = createAction("/getUserSuccess");
const getUserInfoError = createAction("/getUserError");

export default {
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoError,
};
