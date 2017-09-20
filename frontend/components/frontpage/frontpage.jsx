import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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

  handleDemoClick(event) {
    this.props.login({
      username: 'guest',
      password: 'password'
    });
  }

  renderSessionErrors() {
    //
    // if (this.props.sessionErrors.length === 0) {
    //   return (null);
    // }
    //
    // const errorEls = this.props.sessionErrors.map( error =>
    //   (<li key={error}>{error}</li>)
    // );
    const errorEls = this.props.sessionErrors.map (error =>
      (<div key={error}>{error}</div>)
    );
    console.log(errorEls);

      return (
        <div id='errors-list'>
          <ReactCSSTransitionGroup
              transitionName="errors"
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={2000}>
                {errorEls}
            </ReactCSSTransitionGroup>
        </div>
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

          <button
            id='demo'
            onClick={this.handleDemoClick.bind(this)}
            >
            DEMO
          </button>
        </div>
        {this.renderSessionErrors.bind(this)()}
      </div>
    );
  }
}

export default Frontpage;
