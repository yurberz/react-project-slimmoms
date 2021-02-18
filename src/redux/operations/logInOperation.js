import { signIn } from "../actions/logInAction";
import slimMomApi from "../../services/api";

const logInOperation = (user) => async (dispatch) => {
  try {
    const response = await slimMomApi.logIn({ ...user });

    slimMomApi.setToken(response.accessToken);
    dispatch(signIn(response));
  } catch (error) {
    // dispatch(setError(error));
  } finally {
    // dispatch(setLoading());
  }
};

export { logInOperation };
