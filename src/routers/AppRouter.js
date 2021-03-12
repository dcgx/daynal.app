import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { firebase } from '../firebase/config';

import { AuthRouter } from './AuthRouter';
import { Home } from '../containers/Home/Home';
import { Write } from '../containers/Write/Write';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  const dispatch = useDispatch();
  const [isWaiting, setIsWaiting] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.email));
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }

      setIsWaiting(false);
    });
  }, [dispatch, setIsWaiting, setIsAuthenticated]);

  if (isWaiting) {
    return (
      // ex: <Loading/>
      <h1>Wait...</h1>
    );
  }

  return (
    <Router>
      <Switch>
        <PublicRoute
          isAuthenticated={isAuthenticated}
          path="/auth"
          component={AuthRouter}
        />
        <PrivateRoute
          isAuthenticated={isAuthenticated}
          exact
          path="/"
          component={Home}
        />
        <PrivateRoute
          isAuthenticated={isAuthenticated}
          exact
          path="/write"
          component={Write}
        />
      </Switch>
    </Router>
  );
};
