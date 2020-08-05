import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

// Components
import CaseProfile from "./components/CaseProfile";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRoute from "./components/privateroute";
import PublicRoute from "./components/publicroute";
import AdminSearch from "./components/AdminSearch";

// State
import { useMachine } from "@xstate/react";
import { appMachine, MachineContext } from "./state";

export default function App() {
  const [currentMachine, sendToMachine] = useMachine(appMachine);

  return (
    <MachineContext.Provider value={[currentMachine, sendToMachine]}>
      <Router>
        <div className="App">
          <Nav machine={currentMachine} />
          <Switch>
            <Route exact path="/" component={Home} />
            {/* User cannot visit route whilst logged in */}
            <PublicRoute
              machine={currentMachine}
              restricted={true}
              exact
              path="/sign-in"
              component={Login}
            />
            <PublicRoute
              machine={currentMachine}
              restricted={true}
              exact
              path="/register"
              component={Register}
            />
            <Route path="/case-profile" component={CaseProfile} />
            <PrivateRoute
              exact
              path="/admin"
              component={AdminSearch}
              machine={currentMachine}
            />
          </Switch>
        </div>
      </Router>
    </MachineContext.Provider>
  );
}
