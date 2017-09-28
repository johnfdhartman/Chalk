import React from 'react';
import {Link, Route, HashRouter, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import FrontPageContainer from './frontpage/frontpage_container';
import NavContainer from './nav/nav_container';
import DashboardContainer from './dashboard/dashboard-container';
import CreateBoardContainer from './board/create/create_board_container';
import ShowBoardContainer from './board/show/show_board_container';
import ProfileContainer from './profile/profile_container';
import {Footer} from './footer/footer';

const App = () => (
  <div>
    <header>
      <Switch>
        <ProtectedRoute path='/dashboard' component={NavContainer}/>
        <ProtectedRoute path='/profile' component={NavContainer}/>
        <ProtectedRoute exact path='/' component={NavContainer}/>
      </Switch>
    </header>
    <div>
      <Switch>
        <AuthRoute path='/frontpage' component={FrontPageContainer}/>
        <ProtectedRoute path='/create' component={CreateBoardContainer}/>
        <Route path='/show/:boardId' component={ShowBoardContainer}/>
        <Route path='/users/:userId' component={ProfileContainer}/>
        <ProtectedRoute exact path='/' component={DashboardContainer}/>
      </Switch>
    </div>
    <footer>
      <Switch>
        <Route path='/dashboard' component={Footer}/>
        <Route path='/profile' component={Footer}/>
        <Route exact path='/' component={Footer}/>
      </Switch>
    </footer>
  </div>
);

export default App;
