import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Login } from '../containers/Auth/Login';
import { Register } from '../containers/Auth/Register';

export const AuthRouter = () => {
  return (
    <div class="auth__main">
      <Switch>
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/register" component={Register} />
      </Switch>
    </div>
  );
};
