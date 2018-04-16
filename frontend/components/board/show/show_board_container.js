import {connect} from 'react-redux';
import ShowBoard from './show_board.jsx';
import {withRouter} from 'react-router';
import {requestBoard} from '../../../actions/board_actions';
import {updateBoardStage} from '../../../actions/ui_actions';
import {
  getBoardsWithStages,
  getCurrentBoardWithStage
} from '../../../selectors/board_selectors';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.boardId;
  return {
    boardId: id,
    board: getCurrentBoardWithStage(state, id)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateBoardStage: (stage) =>
    dispatch(updateBoardStage(stage, ownProps.match.params.boardId))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShowBoard)
);
