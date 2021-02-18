import { createAction } from "@reduxjs/toolkit";

const setUserInfo = createAction("@calc/setUser");
const getRecomends = createAction("@calc/getRecomends");
const setError = createAction("@calc/setError");
// const setLoading = createAction("@calc/setLoading");

export { setUserInfo, getRecomends, setError };
