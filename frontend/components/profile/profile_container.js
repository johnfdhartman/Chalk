import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Profile from './profile';
import {requestUserBoards} from '../../actions/board_actions';
import {requestUser} from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
  session: state.session,
  errors: state.errors,
  boards: state.boards,
  userId: ownProps.match.params.userId,
  user: state.users[ownProps.match.params.userId]
});

const mapDispatchToProps = (dispatch) => ({
  requestUserBoards: (userId, page) => (
    dispatch(requestUserBoards(userId, page))),
  requestUser: (userId) => (
    dispatch(requestUser(userId))
  )
});

export default withRouter(
  connect(mapStateToProps,mapDispatchToProps)(Profile)
);
