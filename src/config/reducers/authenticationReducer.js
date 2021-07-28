import { USERMODE } from "config/constants/userMode";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user } : {};

export const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERMODE.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case USERMODE.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case USERMODE.LOGIN_FAILURE:
      return {};
    case USERMODE.LOGOUT:
      return {};
    default:
      return state;
  }
};
