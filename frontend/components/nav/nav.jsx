import React from 'react';
import {Link} from 'react-router-dom';
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

  renderWelcome() {
    if (this.props.currentUser) {
      return (
        <li>
          Welcome, {this.props.currentUser.username}
        </li>
      );
    } else {
      return (
        <li>

        </li>
      );
    }
  }

  renderSessionButton() {
    if (this.props.currentUser) {
      return (
        <li>
          <button
            className='nav-button white-button logout'
            onClick={this.handleLogout.bind(this)}>
            LOGOUT
          </button>
        </li>
      );
    } else {
      return (
        <li>
          <Link
            to={`/`}
            id={'login-signup'}
            className='nav-button white-button'>
            LOGIN/SIGNUP
          </Link>
        </li>
      );
    }
  }


  renderProfile() {
    if (this.props.currentUser) {
      return (
        <li>
          <Link
            to={`/users/${this.props.currentUser.id}`}
            className='nav-button white-button profile'
            />
        </li>
      );
    } else {
      return (
        null
      );
    }
  }

  render() {
    let welcome = this.renderWelcome.bind(this)();
    let profile = this.renderProfile.bind(this)();
    let sessionButton = this.renderSessionButton.bind(this)();
    return(
      <ul>
        <li id='logo'>LOGO</li>
        <li>
          <input id='search'
            value={this.state.inputVal}
            onChange={this.handleInput.bind(this)}/>
        </li>
        {welcome}
        {profile}
        {sessionButton}
      </ul>
    );
  }
}

export default Nav;
