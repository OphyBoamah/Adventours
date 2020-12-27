import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Pages } from 'Pages';

const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={Pages.Homepage} />
      <Route exact path='/tours' component={Pages.Tours} />
      <Route exact path='/tour/:id' component={Pages.TourDetail} />
    </Switch>
  );
};

export default Router;
