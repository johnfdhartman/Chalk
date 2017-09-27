import {connect} from 'react-redux';
import Playback from './playback.jsx';
import {withRouter} from 'react-router';
import {requestBoard, updateBoardStage} from '../../../actions/board_actions';

const mapStateToProps = (state, ownProps) => ({
  boardId: ownProps.boardId,
  boardStage: state.board.boardStage,
  dims: ownProps.dims,
  canvasId: ownProps.canvasId
});

const mapDispatchToProps = (dispatch) => ({
  requestBoard: (id) => (dispatch(requestBoard(id))),
  updateBoardStage: (stage) => (dispatch(updateBoardStage(stage)))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Playback)
);