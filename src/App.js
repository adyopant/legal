import React, { Fragment } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

// Components
import Home from "./components/Home";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Register from "./components/Register";

export default function App() {
  return (
    <Fragment>
      <Router>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/sign-in" component={Login} />
        <Route path="/register" component={Register} />
      </Router>
    </Fragment>
  );
}
