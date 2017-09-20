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

  renderSessionErrors() {
    // console.log('this.props.sessionErrors',this.props.sessionErrors);

    // let errors = (this.props.sessionErrors.errors ?
    //   this.props.sessionErrors.errors
    //   : []);
    // let sessionErrors = errors.map( (error) => (
    //   <li>{error}</li>
    //   )
    // );
    console.log(this.props.sessionErrors);
    const errorEls = this.props.sessionErrors.map( error =>
      (<li key={error}>{error}</li>)
    );
    console.log(errorEls);
    return (
      <ul id='errors-list'>
        {errorEls}
      </ul>
    );
  }



  render() {
    // console.log(this.props.sessionErrors);
    let errors = this.renderSessionErrors.bind(this)();
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
        <div id='errors'>{errors}</div>
      </div>
    );
  }
}

export default Frontpage;
