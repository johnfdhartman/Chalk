import {connect} from 'react-redux';
import Playback from './playback.jsx';
import {withRouter} from 'react-router';
import {requestBoard, updateBoardStage} from '../../../actions/board_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    boardId: ownProps.boardId,
    board: state.boards[ownProps.boardId],
    dims: ownProps.dims,
    canvasId: ownProps.canvasId
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestBoard: (id) => (dispatch(requestBoard(id))),
  updateBoardStage: (stage, id) => (dispatch(updateBoardStage(stage, id)))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Playback)
);
