import Paper from "@material-ui/core/Paper";

import useStyles from "./styled";

const AuthForm = ({ formik }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>AuthForm</h1>
      <Paper className={classes.formContainer}>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <button type="submit">Submit</button>
      </form>
      </Paper>
    </div>
  );
};

export default AuthForm;
