import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ Component, machine, ...rest }) => {
  const { user } = machine.context;
  return (
    <Route
      {...rest}
      render={(props) =>
        user !== undefined ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/sign-in",
              state: { reason: "User is not active" },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
