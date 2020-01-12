import React from "react";
import Navbar from "./Components/layout/Navbar";
import Alerts from "./Components/layout/Alerts";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";

import AlertState from "./context/alert/AlertState";
import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";

import Register from "./Components/auth/Register";
import Login from "./Components/auth/Login";

import "./App.css";


const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <>
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
