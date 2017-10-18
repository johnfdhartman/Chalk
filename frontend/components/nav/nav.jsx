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

  renderSessionBar() {
    if (this.props.currentUser) {
      return (
        <div className='session-bar'>
          <div className='welcome-logout'>
            <div className='welcome'>
              Welcome, {this.props.currentUser.username}
            </div>
            <button
              className='nav-button white-button logout'
              onClick={this.handleLogout.bind(this)}>
              LOGOUT
            </button>
          </div>
          <Link
            to={`/users/${this.props.currentUser.id}`}
            className='nav-button white-button profile'
            />
        </div>
      );
    } else {
      return (
        <div className='session-bar'>
          <div>

            <Link
              to={`/`}
              id={'login-signup'}
              className='nav-button white-button'>
              LOGIN/SIGNUP
            </Link>
          </div>
        </div>
      );
    }
  }



  render() {
    let sessionBar = this.renderSessionBar.bind(this)();
    return(
      <nav>
        <div id='logo'>LOGO</div>
        <input id='search'
          value={this.state.inputVal}
          onChange={this.handleInput.bind(this)}/>
        {sessionBar}
      </nav>
    );
  }
}

export default Nav;
