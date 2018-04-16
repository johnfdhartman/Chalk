import _ from 'lodash';

import { createSelector } from 'reselect';

const getStaticBoards = state => state.boards;
const getBoardStages = state => state.ui.boardStages;

const getStaticBoard = (state, boardId) => (
  state.boards[boardId]
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

export const getBoardWithStage = createSelector(
  [getStaticBoard, getBoardStages],
  (staticBoard, boardStages) => {
    // console.log('CURRENTBOARD', staticBoard);
    let newBoard = _.merge({}, staticBoard);
    newBoard.stage = boardStages[newBoard.id];
    return newBoard;
  }
);
