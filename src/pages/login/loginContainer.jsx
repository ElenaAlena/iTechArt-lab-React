import { useEffect } from "react";
import { useFormik } from "formik";
import { useLocation, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Login from "./login";

import AUTHFORMDATA from "config/constants/authformdata";
import { userActions } from "config/actions/userActions";
import { loginValidation } from "utils/validations";

const validate = loginValidation;

const LoginContainer = () => {
  const user = useSelector((state) => state.authenticationReducer.user);

  const dispatch = useDispatch();
  const location = useLocation();

  // reset login status
  useEffect(() => {
    dispatch(userActions.logout());
  }, []);

  const getInitialValues = AUTHFORMDATA.reduce((initialValues, formItem) => {
    initialValues[formItem.id] = formItem.initialValue;
    return initialValues;
  }, {});
  const formik = useFormik({
    initialValues: getInitialValues,
    validate,
    onSubmit: (values) => {
      if (values) {
        dispatch(userActions.login(values.email, values.password));
      }
    },
  });
  if (user) {
    //const { from } = location.state || { from: { pathname: "/" } };
    return <Redirect to={location.state || { from: { pathname: "/" } }} />;
  }
  return <Login formik={formik} />;
};

export default LoginContainer;
