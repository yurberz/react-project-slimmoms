import { signUp } from "../actions/registerAction";
import slimMomApi from "../../services/api";

const signUpOperation = (user) => async (dispatch) => {
  try {
    const response = await slimMomApi.register({ ...user });

    dispatch(signUp(response));
  } catch (error) {
    // dispatch(setError(error));
  } finally {
    // dispatch(setLoading());
  }
};

export { signUpOperation };
