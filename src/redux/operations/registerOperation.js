import { signUp } from "../actions/registerAction";
import { signIn } from "../actions/logInAction";
import slimMomApi from "../../services/api";

const signUpOperation = (user) => async (dispatch) => {
  try {
    const response = await slimMomApi.register({ ...user });

    dispatch(signUp(response));
    // console.log(response);
    // dispatch(signIn(response.user));
  } catch (error) {
    // dispatch(setError(error));
  } finally {
    // dispatch(signIn(response.user));
  }
};

export { signUpOperation };
