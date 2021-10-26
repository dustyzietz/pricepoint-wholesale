import { SET_USER } from "../types";

export const setUser = (email, token) => async (dispatch) => {
  dispatch({
    type: SET_USER,
    payload: { email, token },
  });
};


