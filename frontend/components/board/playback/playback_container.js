import {connect} from 'react-redux';
import Playback from './playback.jsx';
import {withRouter} from 'react-router';
import {
  requestBoard,
} from '../../../actions/board_actions';

import {
  updateBoardStage,
  clearBoard
} from '../../../actions/ui_actions';

import {START, RUNNING, FINISHED} from '../board_stages.js';

import {getCurrentBoardWithStage} from '../../../selectors/board_selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    boardId: ownProps.boardId,
    board: getCurrentBoardWithStage(state, ownProps),
    dims: ownProps.dims,
    canvasId: ownProps.canvasId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestBoard: (id) => (dispatch(requestBoard(id))),
  updateBoardStage: (stage) => (dispatch(updateBoardStage(stage, ownProps.boardId))),
  clearBoard: () => (dispatch(clearBoard(ownProps.boardId)))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Playback)
);
