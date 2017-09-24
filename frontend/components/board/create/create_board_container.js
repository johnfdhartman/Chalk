import React from 'react';
import {connect} from 'react-redux';
import CreateBoard from './create_board.jsx';
import {updateCreateBoardStage, saveBoard} from '../../../actions/create_board_actions';

const mapStateToProps = (state) => ({
  createBoardStage: state.createBoard.createBoardStage
});

const mapDispatchToProps = (dispatch) => ({
  updateCreateBoardStage: (stage) =>
    dispatch(updateCreateBoardStage(stage)),

  saveBoard: (board) =>
    dispatch(saveBoard(board))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoard);
