import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styled";
import ROUTES from "config/constants/routes";

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}></Typography>
            {ROUTES.map((route, index) => (
              route.isLink && <NavLink
                className={classes.navLink}
                to={route.path}
                activeClassName={classes.active}
                key={index}
              >
                {route.title}
              </NavLink>
            ))}
          </Toolbar>
        </AppBar>
      </div>
      {children}
    </React.Fragment>
  );
};
Layout.propTypes = {
  children: PropTypes.object,
  title: PropTypes.string,
};
export default Layout;
