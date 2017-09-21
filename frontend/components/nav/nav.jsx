import React from 'react';
class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLogout(event) {
    this.props.logout();
  }


  render() {
    return(
      <nav>
        <h3>Welcome, {this.props.currentUser.username}</h3>
        <button
          id='logout'
          onClick={this.handleLogout.bind(this)}>
          LOGOUT
        </button>
        <button
          id='profile'
          > </button>
      </nav>
    );
  }
}

export default Nav;
