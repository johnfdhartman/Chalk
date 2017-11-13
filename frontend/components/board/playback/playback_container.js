import {connect} from 'react-redux';
import Playback from './playback.jsx';
import {withRouter} from 'react-router';
import {
  requestBoard,
  updateBoardStage,
  clearBoard
} from '../../../actions/board_actions';

import {START, RUNNING, FINISHED} from '../board_stages.js';

const mapStateToProps = (state, ownProps) => {
  let thisBoard = state.boards[ownProps.boardId];
  let pathsProp;
  if (thisBoard && thisBoard.paths) {
    pathsProp = thisBoard.paths;
  } else {
    pathsProp = [];
  }
  let stageProp;
  if (thisBoard && thisBoard.stage) {
    stageProp = thisBoard.stage;
  } else {
    stageProp = START;
  }
  return {
    boardId: ownProps.boardId,
    stage: stageProp,
    paths: pathsProp,
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
