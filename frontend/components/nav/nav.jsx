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


  render() {
    // if (this.props.location.pathname === '/create' ||
    //     this.props.location.pathname.slice(0,4)) {
    //   console.log('yeeee');
    //   return (<div></div>);
    // }
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
            className='nav-button white-button'
            onClick={this.handleLogout.bind(this)}>
            LOGOUT
          </button>
        </div>
        <Link
          to={`/users/${this.props.currentUser.id}`}
          id='profile'
          className='nav-button white-button'
          />

      </nav>
    );
  }
}

export default Nav;
