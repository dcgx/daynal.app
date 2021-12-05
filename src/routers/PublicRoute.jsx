import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import { Fragment } from "react";

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      element={(props) =>
        isAuthenticated ? (
          <Route render={() => <Route to="/" />} />
        ) : (
          <Fragment {...props} />
        )
      }
    />
  );
};

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
