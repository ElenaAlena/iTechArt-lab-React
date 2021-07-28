import { Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import Layout from "./components/Layout/Layout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import MyNotesContainer from "./pages/myNotes/myNotesContainer";
import About from "./pages/about/aboutContainer";
import SharedNotesContainer from "./pages/sharedNotes/sharedNotesContainer";
import Page404Container from "./pages/page404/Page404Container";
import RegisterContainer from "./pages/register/registerContainer";
import LoginContainer from "./pages/login/loginContainer";

import ROUTES from "config/constants/routes";

const componentRegistry = {
  MyNotesContainer: MyNotesContainer,
  RegisterContainer: RegisterContainer,
  SharedNotesContainer: SharedNotesContainer,
  Page404Container: Page404Container,
  About: About,
  LoginContainer: LoginContainer,
};
function App() {
  return (
    <BrowserRouter basename="/iTechArt-lab-React">
      <div className="App">
        <Layout>
          <Switch>
            {ROUTES.map((route, index) =>
              route.private ? (
                <PrivateRoute
                  exact
                  path={route.path}
                  component={componentRegistry[route.component]}
                  key={index}
                />
              ) : (
                <Route
                  exact
                  path={route.path}
                  component={componentRegistry[route.component]}
                  key={index}
                />
              )
            )}
            <Route path="*">
              <Redirect to="/not-found" />
            </Route>
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
