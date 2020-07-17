import React from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Registration } from "./components/Registration/registration";
import { Login } from "./components/Login/login";
import { Dashboard } from "./components/Dashboard/dashboard";

function App() {
  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/registration">
              <Registration />
            </Route>
            <Route exact path="/chat_dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
