import {connect} from 'react-redux';
import ShowBoard from './show_board.jsx';
import {withRouter} from 'react-router';
import {requestBoard, updateBoardStage} from '../../../actions/board_actions';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.boardId;
  return {
    boardId: id,
    board: state.boards[id]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateBoardStage: (stage) =>
    dispatch(updateBoardStage(stage, ownProps.match.params.boardId))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShowBoard)
);
