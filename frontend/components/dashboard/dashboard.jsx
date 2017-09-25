import React from 'react';
import NavContainer from '../nav/nav_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <div id='dashboard'>
          <h1>Dashboard Presentational!</h1>
          HECK HECK
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      In imperdiet ornare erat ac consequat. Nunc sed odio vitae metus
      efficitur aliquet ut et orci. Pellentesque mollis enim non blandit congue.
      Etiam nec lobortis tellus, non mattis ligula. Sed vehicula lacus vel justo pretium
     consectetur. Morbi lacinia tellus sit amet metus facilisis porta. Maecenas tortor orci,
     condimentum eu augue eget, luctus varius erat. Mauris in libero eu ipsum volutpat mollis.
     Sed luctus dolor ullamcorper, efficitur urna non, dignissim sapien.
        </div>
      </div>
    );
  }
}

export default Dashboard;
