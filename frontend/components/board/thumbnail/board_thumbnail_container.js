import {connect} from 'react-redux';
import BoardThumbnail from './board_thumbnail';
import {updateBoardStage} from '../../../actions/ui_actions';

import {
  getBoardWithStage
} from '../../../selectors/board_selectors';

const mapStateToProps = (state, ownProps) => ({
  boardId: ownProps.boardId,
  board: state.boards[ownProps.boardId],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateBoardStage: stage =>
    dispatch(updateBoardStage(stage, ownProps.boardId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardThumbnail);
