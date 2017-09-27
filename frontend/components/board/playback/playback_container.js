import {connect} from 'react-redux';
import Playback from './playback.jsx';
import {withRouter} from 'react-router';
import {requestBoard, updateBoardStage} from '../../../actions/board_actions';

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    boardId: ownProps.boardId,
    boardStage: state.boards[ownProps.boardId].stage,
    dims: ownProps.dims,
    canvasId: ownProps.canvasId
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestBoard: (id) => (dispatch(requestBoard(id))),
  updateBoardStage: (stage) => (dispatch(updateBoardStage(stage)))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Playback)
);
