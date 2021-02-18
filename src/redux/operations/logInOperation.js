import { signIn, setErrorr } from "../actions/logInAction";
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
    // dispatch(setError(error));
  } finally {
    // dispatch(setLoading());
  }
};

export { logInOperation };
