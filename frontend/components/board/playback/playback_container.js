import {connect} from 'react-redux';
import Playback from './playback.jsx';
import {withRouter} from 'react-router';
import {
  requestBoard,
  updateBoardStage,
  clearBoard
} from '../../../actions/board_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    boardId: ownProps.boardId,
    board: state.boards[ownProps.boardId],
    dims: ownProps.dims,
    canvasId: ownProps.canvasId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestBoard: (id) => (dispatch(requestBoard(id))),
  updateBoardStage: (stage, id) => (dispatch(updateBoardStage(stage, id))),
  clearBoard: () => (dispatch(clearBoard(ownProps.boardId)))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Playback)
);
