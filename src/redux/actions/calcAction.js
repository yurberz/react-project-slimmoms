import { createAction } from "@reduxjs/toolkit";

const setUserInfo = createAction("@calc/setUser");
const getRecomends = createAction("@calc/getRecomends");
const setError = createAction("@calc/setError");
const toggleModal = createAction("@calc/toggleModal");

export { setUserInfo, getRecomends, setError, toggleModal };
