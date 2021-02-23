import { signUp, setError } from "../actions/registerAction";
import slimMomApi from "../../services/api";
import {
  chngRecomendsRequest,
  chngRecomendsSuccess,
} from "../actions/logInAction";

const signUpOperation = (user, history) => async (dispatch) => {
  dispatch(chngRecomendsRequest());
  try {
    const response = await slimMomApi.register({ ...user });
    if (response === "Request failed with status code 409") {
      dispatch(setError(response));
    } else {
      dispatch(signUp(response));
      history.push({
        pathname: "/login",
      });
    }
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(chngRecomendsSuccess());
  }
};

export { signUpOperation };
