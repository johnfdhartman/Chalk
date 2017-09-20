import React from 'react';
import {connect} from 'react-redux';
import {login, signup} from '../../actions/session_actions';
import Frontpage from './frontpage';

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Frontpage);
