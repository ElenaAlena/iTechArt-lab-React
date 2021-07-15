import { Route, Switch,Redirect } from "react-router-dom";

import "./App.css";

import Layout from "./components/Layout/Layout";
import MyNotesContainer from "./pages/myNotes/myNotesContainer";
import About from "./pages/about/aboutContainer";
import SharedNotesContainer from "./pages/sharedNotes/sharedNotesContainer";
import Page404Container from "./pages/page404/Page404Container";

function App({ history }) {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route
            history={history}
            path={["/iTechArt-lab-React/about", "/about"]}
          >
            <About />
          </Route>
          <Route
            history={history}
            exact
            path={[
              "/iTechArt-lab-React/notes",
              "/notes",
              '/'
            ]}
          >
            <MyNotesContainer />
          </Route>
          <Route
            history={history}
            path={["/iTechArt-lab-React/shared-notes", "/shared-notes"]}
          >
            <SharedNotesContainer />
          </Route>
          <Route history={history} path="*">
            <Page404Container />
          </Route>         
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
