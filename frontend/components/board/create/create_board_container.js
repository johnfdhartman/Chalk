import React from 'react';
import {connect} from 'react-redux';
import CreateBoard from './create_board.jsx';
import {updateCreateBoardStage, saveBoard} from '../../../actions/board_actions';

const mapStateToProps = (state) => ({
  createBoardStage: state.board.createBoardStage,
  boardErrors: state.errors.boardErrors
});

const mapDispatchToProps = (dispatch) => ({
  updateCreateBoardStage: (stage) =>
    dispatch(updateCreateBoardStage(stage)),

  saveBoard: (board) =>
    dispatch(saveBoard(board))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoard);
