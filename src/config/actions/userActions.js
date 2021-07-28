import { userService } from "../../utils/userService";
import { alertActions } from "./alertActions";

import { USERMODE } from "config/constants/userMode";

const login = (email, password, from) => {
  const request = (user) => ({ type: USERMODE.LOGIN_REQUEST, user });
  const success = (user) => ({ type: USERMODE.LOGIN_SUCCESS, user });
  const failure = (error) => ({ type: USERMODE.LOGIN_FAILURE, error });


  return (dispatch) => {
    dispatch(request({ email }));

    userService.login(email, password).then(
      (user) => {
        dispatch(success(user));
        window.history.pushState(from, "", from.pathname);
        window.history.go(0);
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
};
const logout = () => {
  userService.logout();
  return { type: USERMODE.LOGOUT };
};

const register = (user) => {
  const request = (user) => ({ type: USERMODE.REGISTER_REQUEST, user });
  const success = (user) => ({ type: USERMODE.REGISTER_SUCCESS, user });
  const failure = (error) => ({ type: USERMODE.REGISTER_FAILURE, error });

  return (dispatch) => {
    dispatch(request(user));

    userService.register(user).then(
      (user) => {
        dispatch(success());
        window.history.pushState(null, "LoginForm", "/login");
        window.history.go(0);
        dispatch(alertActions.success("Registration successful"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
};

const getAll = () => {
  const request = () => ({ type: USERMODE.GETALL_REQUEST });
  const success = (users) => ({ type: USERMODE.GETALL_SUCCESS, users });
  const failure = (error) => ({ type: USERMODE.GETALL_FAILURE, error });

  return (dispatch) => {
    dispatch(request());

    userService.getAll().then(
      (users) => dispatch(success(users)),
      (error) => dispatch(failure(error.toString()))
    );
  };
};

export const userActions = {
  login,
  logout,
  register,
  getAll,
};
