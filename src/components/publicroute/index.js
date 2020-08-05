import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ Component, machine, restricted, ...rest }) => {
  const { user } = machine.context;
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) =>
        user !== undefined && restricted ? (
          <Redirect
            to={{
              pathname: "/sign-in",
              state: { reason: "User is not active" },
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
