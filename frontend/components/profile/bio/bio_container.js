import {connect} from 'react-redux';

import {
  requestUser,
  requestUpdateUser
} from '../../../actions/user_actions';

import {
  openBioEditor,
  closeBioEditor
} from '../../../actions/ui_actions';

import Bio from './bio';

const mapStateToProps = (state, ownProps) => ({
  userId: ownProps.userId,
  user: state.users[ownProps.userId],
  session: state.session,
  isCurrentUser: (state.session.currentUser &&
    parseInt(state.session.currentUser.id) === parseInt(ownProps.userId)
  ),
  // currentUserId: state.session.currentUser.id,
  ui: state.ui
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestUser: id => dispatch(requestUser(id)),
  requestUpdateUser: (userData) => (
    dispatch(requestUpdateUser(ownProps.userId, userData))
  ),
  openBioEditor: () => dispatch(openBioEditor()),
  closeBioEditor: () => dispatch(closeBioEditor())
});

export default connect(mapStateToProps, mapDispatchToProps)(Bio);
