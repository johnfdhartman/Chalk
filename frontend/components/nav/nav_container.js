import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';
import {withRouter} from 'react-router';
import Nav from './nav';

const mapStateToProps = (state,ownProps) => ({
  currentUser: state.session.currentUser,
  ownProps: ownProps
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
