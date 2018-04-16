import _ from 'lodash';

import { createSelector } from 'reselect';

const getStaticBoards = state => state.boards;
const getBoardStages = state => state.ui.boardStages;

export const getBoardsWithStages = createSelector(
  [getStaticBoards, getBoardStages],
  (staticBoards, boardStages) => {
    let newBoards = _.merge({}, staticBoards);
    _.forEach(boardStages, (boardId, stage) => {
      newBoards[boardId].stage = stage;
    });
    return newBoards;
  }
);
