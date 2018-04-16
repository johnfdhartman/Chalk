import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import Clock from './clock';
import {updateBoardStage} from '../../actions/ui_actions';
import {
  getBoardsWithStages,
  getCurrentBoardWithStage
} from '../../selectors/board_selectors';

const mapStateToProps = (state, ownProps) => ({
  path: ownProps.match.path,
  boardId: ownProps.boardId,
  board: getCurrentBoardWithStage(state, ownProps)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateBoardStage: (stage) =>
    dispatch(updateBoardStage(stage, ownProps.boardId))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Clock)
);
