import React from 'react';

class Frontpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInput(field) {
    return (event) => {
      this.setState({
        [field]: event.target.value
      });
    };
  }

  handleButtonClick(buttonAction) {
    return (event) => (
      buttonAction(this.state)
    );
  }

  render() {
    return (
      <div id='frontpage'>
        <h3>Frontpage component!</h3>
        <div id='auth-fields'>
          <label>Username
            <input
              type='text'
              value={this.state.username}
              onChange={this.handleInput('username').bind(this)}/>
          </label>
          <label>Password
            <input
              type='password'
              value={this.state.password}
              onChange={this.handleInput('password').bind(this)} />
          </label>
        </div>

        <div id='auth-buttons'>
          <button
            id='login'
            onClick={this.handleButtonClick(this.props.login)}
            >
              Login!
          </button>
          <button
            id='signup'
            onClick={this.handleButtonClick(this.props.signup)}
            >
              Sign up!
          </button>
        </div>
      </div>
    );
  }
}

export default Frontpage;
