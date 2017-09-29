import {connect} from 'react-redux';
import {requestUser} from '../../../actions/user_actions';
import UserInfo from './user_info';

const mapStateToProps = (state, ownProps) => ({
  userId: ownProps.userId
});

const mapDispatchToProps = (dispatch) => ({
  requestUser: id => dispatch(requestUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
