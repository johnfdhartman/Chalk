import React from 'react';
import NavContainer from '../nav/nav_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <h1>Dashboard Presentational!</h1>
        <div><NavContainer /></div>
      </div>
    );
  }
}

export default Dashboard;
