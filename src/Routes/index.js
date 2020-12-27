import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Pages } from 'Pages';

const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={Pages.Homepage} />
    </Switch>
  );
};

export default Router;
