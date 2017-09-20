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
      <div>
        <h3>Welcome, {this.props.currentUser.username}</h3>
        <button
          id='logout'
          onClick={this.handleLogout.bind(this)}>
          Logout!
        </button>
      </div>
    );
  }
}

export default Nav;
