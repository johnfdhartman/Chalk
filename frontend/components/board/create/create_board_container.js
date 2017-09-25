import React from 'react';
import {connect} from 'react-redux';
import CreateBoard from './create_board.jsx';
import {updateBoardStage, saveBoard} from '../../../actions/board_actions';

const mapStateToProps = (state) => ({
  boardStage: state.board.boardStage,
  boardErrors: state.errors.boardErrors
});

const mapDispatchToProps = (dispatch) => ({
  updateBoardStage: (stage) =>
    dispatch(updateBoardStage(stage)),

  saveBoard: (board) =>
    dispatch(saveBoard(board))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoard);
