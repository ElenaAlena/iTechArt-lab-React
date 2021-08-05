import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styled";
import {ROUTES} from "config/constants/routes";
import ActionAlert from "components/ActionAlert/ActionAlert";
import { alertActions } from "config/actions/alertActions";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();
  const alert = useSelector((state) => state.alertReducer);
  const user = useSelector((state) => {
    return state.authenticationReducer.user;
  });
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
  }, []);
  const title = user && user.firstName ? `HI ${user.firstName}` : "";
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <React.Fragment>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                {title}
              </Typography>
              {ROUTES.map(
                (route, index) =>
                  route.isLink && (
                    <NavLink
                      className={classes.navLink}
                      to={route.path}
                      activeClassName={classes.active}
                      key={index}
                    >
                      {route.title}
                    </NavLink>
                  )
              )}
              {user && (
                <NavLink
                  className={classes.navLink}
                  to="/login"
                  activeClassName={classes.active}
                >
                  LogOut
                </NavLink>
              )}
            </Toolbar>
          </AppBar>
        </div>
        {alert.message && (
          <ActionAlert alert={{ type: alert.type, text: alert.message }} />
        )}
        {children}
      </React.Fragment>
    </QueryClientProvider>
  );
};
Layout.propTypes = {
  children: PropTypes.object,
  title: PropTypes.string,
};
export default Layout;
