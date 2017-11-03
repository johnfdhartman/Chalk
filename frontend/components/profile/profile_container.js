import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Profile from './profile';
import {requestUserBoards} from '../../actions/board_actions';
import {requestUpdateUser} from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
  session: state.session,
  errors: state.errors,
  boards: state.boards,
  userId: ownProps.match.params.userId,
  isCurrentUser: (state.session.currentUser &&
    (state.session.currentUser.id === ownProps.match.params.userId)),
  ui: state.ui
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestUserBoards: (userId, page) => (
    dispatch(requestUserBoards(userId, page)))
});

export default withRouter(
  connect(mapStateToProps,mapDispatchToProps)(Profile)
);
