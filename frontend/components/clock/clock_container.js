import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import Clock from './clock';
import {updateBoardStage} from '../../actions/board_actions';

const mapStateToProps = (state, ownProps) => ({
  path: ownProps.match.path,
  boardId: ownProps.boardId,
  board: state.boards[ownProps.boardId]

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateBoardStage: (stage) =>
    dispatch(updateBoardStage(stage, ownProps.boardId))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Clock)
);
