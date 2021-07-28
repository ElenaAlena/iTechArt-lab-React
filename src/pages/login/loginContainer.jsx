import { useEffect,useState } from "react";
import { useFormik } from "formik";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import Login from "./login";

import AUTHFORMDATA from "config/constants/authformdata";
import { userActions } from "config/actions/userActions";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } /*else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }*/
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

const LoginContainer = () => {
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
        const { from } = location.state || { from: { pathname: "/" } };
        const sd = userActions.login(values.email, values.password, from);
        dispatch(sd);
      }
    },
  });
  
  return <Login formik={formik} />;
};

export default LoginContainer;
