import { useFormik } from "formik";

import AuthForm from "./authForm";

import AUTHFORMDATA from "config/constants/authformdata";

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.dateOfBirth) {
    errors.dateOfBirth = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password !== values.confirmpassword) {
    errors.password = "Passwords mismatch";
  }

  if (!values.confirmpassword) {
    errors.confirmpassword = "Required";
  }

  return errors;
};

const AuthFormContainer = () => {
  const getInitialValues = AUTHFORMDATA.reduce((initialValues,formItem) => {
    initialValues[formItem.id] = formItem.initialValue;
    return initialValues;
  }, {});
  const formik = useFormik({
    initialValues: getInitialValues,
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return <AuthForm formik={formik} />;
};

export default AuthFormContainer;
