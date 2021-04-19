import React from "react";
import { AuthorizedLayout } from "./Layouts/AuthorizedLayout";
import { LoginLayout } from "./Layouts/LoginLayout";
import { Login } from "./Screens/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Main } from "./Screens/Main";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <AuthorizedLayout>
            <Main />
          </AuthorizedLayout>
        </Route>
        <Route exact path="/Login">
          <LoginLayout>
            <Login />
          </LoginLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
