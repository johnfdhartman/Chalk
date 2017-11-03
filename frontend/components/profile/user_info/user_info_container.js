import {connect} from 'react-redux';

import {
  requestUser,
  requestUpdateUser
} from '../../../actions/user_actions';

import {
  openBioEditor,
  closeBioEditor
} from '../../../actions/ui_actions';

import UserInfo from './user_info';

const mapStateToProps = (state, ownProps) => ({
  userId: ownProps.userId,
  user: state.users[ownProps.userId],
  session: state.session,
  isCurrentUser: (state.session.currentUser &&
    state.session.currentUser.id === ownProps.userId),
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

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
