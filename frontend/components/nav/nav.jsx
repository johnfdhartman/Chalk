import React from 'react';
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    };
  }

  handleLogout(event) {
    this.props.logout();
  }

  handleInput(event) {
    this.setState({
      inputVal: event.target.value
    });
  }

  render() {
    return(
      <nav>
        <div id='logo'>LOGO</div>
        <input id='search'
          value={this.state.inputVal}
          onChange={this.handleInput.bind(this)}/>
        <div id='session-bar'>
          <div id='welcome'>
            Welcome, {this.props.currentUser.username}
          </div>
          <button
            id='logout'
            className='white-button'
            onClick={this.handleLogout.bind(this)}>
            LOGOUT
          </button>
        </div>
        <button
          id='profile'
          className='white-button'
          > </button>

      </nav>
    );
  }
}

export default Nav;
