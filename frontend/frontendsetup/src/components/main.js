import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SharePage from './SharePage';
import CreateAccount from './CreateAccount';
import LandingPage from './landingpage';
import LogInAcc from './LogInAcc';
import ViewProfile from './ViewProfile';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/SharePage" component={SharePage} />
    <Route path="/CreateAccount" component={CreateAccount} />
    <Route path="/LogInAcc" component={LogInAcc} />
    <Route path="/ViewProfile" component={ViewProfile} />
  </Switch>
)

export default Main;