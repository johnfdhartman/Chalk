import React from 'react';
import {logout} from '../../actions/session_actions';
import {connect} from 'react-redux';
import Dashboard from './dashboard';
import {requestRecentBoards} from '../../actions/board_actions';

const mapStateToProps = (state) => ({
  errors: state.errors,
  boards: state.boards
});

const mapDispatchToProps = (dispatch) => ({
  requestRecentBoards: (page) => dispatch(requestRecentBoards(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
