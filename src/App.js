import React from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Registration } from "./components/Registration/registration";
import { Login } from "./components/Login/login";

function App() {
  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/Registration">
              <Registration />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
