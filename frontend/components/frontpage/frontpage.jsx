import React from 'react';
class Frontpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.description = (<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam.
     Ipsum consequat nisl vel pretium lectus </div>);
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
        <h3>PleaseHireMe.website</h3>
        <div id='description'>
          {this.description}
        </div>
        <div id='auth-fields'>
          <div id='username-field'>
            <label>Username</label>
            <input
              type='text'
              value={this.state.username}
              onChange={this.handleInput('username').bind(this)}/>
          </div>
          <div id='password-field'>
            <label>Password</label>
            <input
              type='password'
              value={this.state.password}
              onChange={this.handleInput('password').bind(this)} />
          </div>
        </div>

        <div id='auth-buttons'>
          <button
            id='login'
            onClick={this.handleButtonClick(this.props.login)}
            >
              LOGIN
          </button>
          <button
            id='signup'
            onClick={this.handleButtonClick(this.props.signup)}
            >
              SIGN UP
          </button>
        </div>
        <div id='errors'>{errors}</div>
      </div>
    );
  }
}

export default Frontpage;
