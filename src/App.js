import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

import Layout from "./components/Layout/Layout";
import MyNotesContainer from "./pages/myNotes/myNotesContainer";
import About from "./pages/about/aboutContainer";
import SharedNotesContainer from "./pages/sharedNotes/sharedNotesContainer";
import Page404Container from "./pages/page404/Page404Container";
import AuthFormContainer from "./pages/authForm/authFormContainer";

import ROUTES from "config/constants/routes";

const componentRegistry = {
  MyNotesContainer: MyNotesContainer,
  AuthFormContainer: AuthFormContainer,
  SharedNotesContainer: SharedNotesContainer,
  Page404Container: Page404Container,
  About: About,
};

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          {ROUTES.map((route, index) => (
            <Route
              exact
              path={route.path}
              component={componentRegistry[route.component]}
              key={index}
            />
          ))}
          <Route path="*">
            <Redirect to="/not-found" />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
