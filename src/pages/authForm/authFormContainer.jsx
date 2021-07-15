import { useFormik } from "formik";

import AuthForm from "./authForm";

const AuthFormContainer = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return <AuthForm formik={formik} />;
};

export default AuthFormContainer;
