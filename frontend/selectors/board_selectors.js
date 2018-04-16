import _ from 'lodash';

import { createSelector } from 'reselect';

const getStaticBoards = state => state.boards;
const getBoardStages = state => state.ui.boardStages;

const getCurrentStaticBoard = (state, ownProps) => (
  state.boards[ownProps.boardId]
);


export const getBoardsWithStages = createSelector(
  [getStaticBoards, getBoardStages],
  (staticBoards, boardStages) => {
    let boards = _.merge({}, staticBoards);
    const boardsWithStages = Object.values(boards).map(board => {
      board.stage = staticBoards[board.id];
      return board;
    });

    return boardsWithStages;
  }
);

export const getCurrentBoardWithStage = createSelector(
  [getCurrentStaticBoard, getBoardStages],
  (currentBoard, boardStages) => {
    // console.log('CURRENTBOARD', currentBoard);
    let newBoard = _.merge({}, currentBoard);
    newBoard.stage = boardStages[newBoard.id];
    return newBoard;
  }
);
