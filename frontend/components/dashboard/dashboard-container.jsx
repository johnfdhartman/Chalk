import React from 'react';
import {logout} from '../../actions/session_actions';
import {connect} from 'react-redux';
import Dashboard from './dashboard';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
