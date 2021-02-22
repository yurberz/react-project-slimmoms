import { createAction } from "@reduxjs/toolkit";

const getRecomendsRequest = createAction("@calc/getRecomendsRequest");
const getRecomendsSuccess = createAction("@calc/getRecomendsSuccess");
const getRecomendsError = createAction("@calc/getRecomendsError");

const toggleModal = createAction("@calc/toggleModal");
const clearState = createAction("@calc/clearState");

export {
  getRecomendsRequest,
  getRecomendsSuccess,
  getRecomendsError,
  toggleModal,
  // clearState,
};
