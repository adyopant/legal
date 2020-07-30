import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children, machine, ...rest }) => {
  const { user } = machine.context;
  return (
    <Route
      {...rest}
      render={() =>
        user !== undefined ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/sign-in",
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
