import {connect} from 'react-redux';
import Profile from './profile';
import {requestUserBoardThumbs} from '../../actions/board_thumb_actions';


const mapStateToProps = (state) => ({
  session: state.session,
  errors: state.errors,
  boardThumbs: state.boardThumbs
});

const mapDispatchToProps = (dispatch) => ({
  requestUserBoardThumbs: (userId, page) => (
    dispatch(requestUserBoardThumbs(userId, page)))
});

export default connect(mapStateToProps,mapDispatchToProps)(Profile);
