import React, { Fragment } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";
import Nav from "./components/Nav";

export default function App() {
  return (
    <Fragment>
      <Router>
        <Nav />
        <Route path="/" component={Home} />
      </Router>
    </Fragment>
  );
}
