import { NavLink } from "react-router-dom";

import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import AUTHFORMDATA from "config/constants/authformdata";

import useStyles from "./styled";

const Login = ({ formik }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>LoginForm</h1>
      <Paper className={classes.formContainer}>
        <form onSubmit={formik.handleSubmit}>
          {AUTHFORMDATA.map(
            (data, index) =>
              data.forLogin && (
                <div key={index}>
                  <TextField
                    id={data.id}
                    required={data.required}
                    label={data.label}
                    variant="outlined"
                    name={data.name}
                    type={data.type}
                    onChange={formik.handleChange}
                    value={formik.values[data.id]}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    fullWidth
                    className={classes.textField}
                    margin="dense"
                    error={!!formik.errors[data.id]}
                    helperText={formik.errors[data.id]}
                  />
                </div>
              )
          )}
          <Button type="submit" variant="contained" className={classes.btn}>
            Login
          </Button>
          <NavLink
            className={classes.navLink}
            to="/register"
            activeClassName={classes.active}
          >
            Register
          </NavLink>
        </form>
      </Paper>
    </div>
  );
};

export default Login;
