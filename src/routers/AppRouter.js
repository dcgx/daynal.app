import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import { auth } from '../services/firebase';
import { signIn } from '../actions/auth';
import { startFetchEntries } from '../actions/entry';

import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { Home } from '../containers/Home/Home';
import { Writer } from '../containers/Writer/Writer';

export const AppRouter = () => {
  const history = createHistory();
  const dispatch = useDispatch();
  const [isWaiting, setIsWaiting] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(signIn(user.uid, user.email));
        setIsAuthenticated(true);
        dispatch(startFetchEntries());
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
    <Router history={history}>
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
          path="/write/new"
          component={Writer}
        />
        <PrivateRoute
          isAuthenticated={isAuthenticated}
          exact
          path="/write/:entryId"
          component={Writer}
        />
      </Switch>
    </Router>
  );
};
