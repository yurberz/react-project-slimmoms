import {
  signIn,
  setErrorr,
  chngParams,
  chngRecomendsRequest,
  chngRecomendsSuccess,
  chngRecomendseError,
} from "../actions/logInAction";
import slimMomApi from "../../services/api";
import { setLoading } from "../actions/loadingAction";

const logInOperation = (user) => async (dispatch) => {
  dispatch(setLoading());
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
    dispatch(setLoading());
  }
};
// ====================================================
const chngUserParam = (userInfo, id) => async (dispatch) => {
  dispatch(chngRecomendsRequest());
  dispatch(chngParams(userInfo));
  try {
    const response = await slimMomApi.getDailyRate(userInfo, id);
    dispatch(chngRecomendsSuccess(response));
  } catch {
    dispatch(chngRecomendseError());
  }
};

export { logInOperation, chngUserParam };
