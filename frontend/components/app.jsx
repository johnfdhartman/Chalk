import React from 'react';
import {Link, Route, HashRouter, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import FrontPageContainer from './frontpage/frontpage_container';
import NavContainer from './nav/nav_container';
import DashboardContainer from './dashboard/dashboard-container';
import {Footer} from './footer/footer';

const App = () => (
  <div>
    <header>
      <ProtectedRoute path='/' component={NavContainer}/>
    </header>
    <div>
      <Switch>
        <AuthRoute path='/frontpage' component={FrontPageContainer}/>
        <ProtectedRoute exact path='/' component={DashboardContainer}/>
      </Switch>
    </div>
    <footer>
      <Footer props={null}/>
    </footer>
  </div>
);

export default App;
