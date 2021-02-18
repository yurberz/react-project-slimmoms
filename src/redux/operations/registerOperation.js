import { signUp, setError } from "../actions/registerAction";
import slimMomApi from "../../services/api";

const signUpOperation = (user, history) => async (dispatch) => {
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
    // dispatch(setError(error));
    // console.log(error);
  } finally {
    // dispatch(signIn(response.user));
  }
};

export { signUpOperation };
