import {connect} from 'react-redux';
import BoardThumbnail from './board_thumbnail';
import {updateBoardStage} from '../../../actions/board_actions';

const mapStateToProps = (state, ownProps) => ({
  boardId: ownProps.boardId
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateBoardStage: stage =>
    dispatch(updateBoardStage(stage, ownProps.boardId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardThumbnail);
