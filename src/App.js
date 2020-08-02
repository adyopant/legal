import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

// Components
import ClientProfile from "./components/ClientProfile";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRoute from "./components/privateroute";

// State
import { useMachine } from "@xstate/react";
import { appMachine, MachineContext } from "./state";

export default function App() {
  const [currentMachine, sendToMachine] = useMachine(appMachine);

  return (
    <MachineContext.Provider value={[currentMachine, sendToMachine]}>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/sign-in" component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRoute machine={currentMachine}>
              <Route exact path="/client-profile" component={ClientProfile} />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </MachineContext.Provider>
  );
}
