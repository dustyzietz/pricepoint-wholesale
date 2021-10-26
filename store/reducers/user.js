import { SET_USER } from "../types";

const initialState = {
  email: null,
  token: "",
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        email: action.payload.email,
        token: action.payload.token,
      };
    default:
      return state;
  }
};
