import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

import Layout from "./components/Layout/Layout";
import MyNotesContainer from "./pages/myNotes/myNotesContainer";
import About from "./pages/about/aboutContainer";
import SharedNotesContainer from "./pages/sharedNotes/sharedNotesContainer";
import Page404Container from "./pages/page404/Page404Container";
import AuthFormContainer from "./pages/authForm/authFormContainer";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/auth">
            <AuthFormContainer />
          </Route>
          <Route path={["/about"]}>
            <About />
          </Route>
          <Route exact path={["/notes","/"]}>
            <MyNotesContainer />
          </Route>
          <Route path={["/shared-notes"]}>
            <SharedNotesContainer />
          </Route>
          <Route path="/not-found">
            <Page404Container />
          </Route>
          <Route path="*">
            <Redirect to="/not-found" />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
