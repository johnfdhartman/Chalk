import _ from 'lodash';

import { createSelector } from 'reselect';

const getStaticBoards = state => state.boards;
const getBoardStages = state => state.ui.boardStages;

export const getBoardsWithStages = createSelector(
  [getStaticBoards, getBoardStages],
  (staticBoards, boardStages) => {
    let boards = _.merge({}, staticBoards);
    const boardsWithStages = boards.map(board => {
      board.stage = staticBoards[board.id];
      return board;
    });

    return boardsWithStages;
  }
);
