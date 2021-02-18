import {
  signIn,
  setErrorr,
  chngParams,
  chngRecomends,
} from "../actions/logInAction";
import slimMomApi from "../../services/api";

const logInOperation = (user) => async (dispatch) => {
  try {
    const response = await slimMomApi.logIn({ ...user });

    slimMomApi.setToken(response.accessToken);
    if (response === "Request failed with status code 403") {
      dispatch(setErrorr(response));
    } else {
      dispatch(signIn(response));
    }
  } catch (error) {
    // dispatch(setErrorr(error));
  } finally {
    // dispatch(setLoading());
  }
};
// ====================================================
const chngUserParam = (userInfo, id) => async (dispatch) => {
  dispatch(chngParams(userInfo));
  try {
    const response = await slimMomApi.getDailyRate(userInfo, id);
    if (response === "No token provided") {
      dispatch(setErrorr(response));
    } else {
      dispatch(chngParams(response));
    }
  } finally {
    // dispatch(setLoading());
  }
};

export { logInOperation, chngUserParam };
