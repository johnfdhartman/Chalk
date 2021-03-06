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
        <Route path='/dashboard' component={NavContainer}/>
        <Route path='/users' component={NavContainer}/>
        <Route exact path='/' component={NavContainer}/>
      </Switch>
    </header>
    <div>
      <Switch>
        <Route path='/show/:boardId' component={ShowBoardContainer}/>
        <Route path='/users/:userId' component={ProfileContainer}/>
        <AuthRoute path='/frontpage' component={FrontPageContainer}/>
        <ProtectedRoute exact path='/' component={DashboardContainer}/>
        <ProtectedRoute path='/create' component={CreateBoardContainer}/>
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
