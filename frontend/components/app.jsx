import React from 'react';
import {Link, Route, HashRouter, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import FrontPageContainer from './frontpage/frontpage_container';

import DashboardContainer from './dashboard/dashboard-container';

const App = () => (
  <div>
    <h2>App! Hooray!</h2>
    <Switch>
      <AuthRoute path='/frontpage' component={FrontPageContainer}/>
      <ProtectedRoute exact path='/' component={DashboardContainer}/>
    </Switch>
  </div>
);

export default App;
