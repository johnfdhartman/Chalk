import React from 'react';
import {connect} from 'react-redux';
import CreateBoard from './create_board.jsx';
import {updateBoardStage, saveBoard} from '../../../actions/board_actions';

const mapStateToProps = (state) => ({
  board: state.boards['current'],
  boardErrors: state.errors.boardsErrors
});

const mapDispatchToProps = (dispatch) => ({
  updateBoardStage: (stage) =>
    dispatch(updateBoardStage(stage, 'current')),

  saveBoard: (board) =>
    dispatch(saveBoard(board))
});

const CreateBoardContainer = (component) => {
  return connect(mapStateToProps, mapDispatchToProps)(component);
};

export default CreateBoardContainer(CreateBoard);
