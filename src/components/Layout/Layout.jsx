import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styled";

const Layout = ({ children}) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
            </Typography>
            <NavLink className={classes.navLink} to="/notes" activeClassName={classes.active}>notes</NavLink>
            <NavLink className={classes.navLink} to="shared-notes" activeClassName={classes.active}>Shared Notes</NavLink>
            <NavLink className={classes.navLink} to="about" activeClassName={classes.active}>About</NavLink>
          </Toolbar>
        </AppBar>
      </div>
      {children}
    </React.Fragment>
  );
};
Layout.propTypes = {
    children: PropTypes.object,
    title:PropTypes.string,
  };
export default Layout;
