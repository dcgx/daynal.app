import React from "react"
import { Navigate, Route } from "react-router-dom"

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  localStorage.setItem("__last_path", rest.location.pathname)
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />
      }
    ></Route>
  )
}
