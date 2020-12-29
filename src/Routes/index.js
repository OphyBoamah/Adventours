import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Pages } from 'Pages';

const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={Pages.Homepage} />
      <Route exact path='/tours' component={Pages.Tours} />
      <Route exact path='/signup' component={Pages.Signup} />
      <Route exact path='/signin' component={Pages.Signin} />
      <Route exact path='/forgotPassword' component={Pages.ForgotPassword} />
      <Route exact path='/resetPassword' component={Pages.ResetPassword} />
      <Route exact path='/tour/:id' component={Pages.TourDetail} />
    </Switch>
  );
};

export default Router;
