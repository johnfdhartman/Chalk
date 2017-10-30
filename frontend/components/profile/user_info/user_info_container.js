import {connect} from 'react-redux';
import {
  requestUser,
  requestUpdateUser
} from '../../../actions/user_actions';
import UserInfo from './user_info';

const mapStateToProps = (state, ownProps) => ({
  userId: ownProps.userId,
  user: state.users[ownProps.userId],
  session: state.session,
  isCurrentUser: (state.session.currentUser.id === ownProps.userId)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestUser: id => dispatch(requestUser(id)),
  requestUpdateUser: (userData) => (
    dispatch(requestUpdateUser(ownProps.match.params.userId, userData))
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
