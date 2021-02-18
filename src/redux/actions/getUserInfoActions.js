import { createAction } from "@reduxjs/toolkit";

const getUserInfoRequest = createAction("auth/getUserRequest");
const getUserInfoSuccess = createAction("auth/getUserSuccess");
const getUserInfoError = createAction("auth/getUserError");

export default {
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoError,
};
