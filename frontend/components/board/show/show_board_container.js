import {connect} from 'react-redux';
import ShowBoard from './show_board.jsx';
import {withRouter} from 'react-router';
import {requestBoard, updateBoardStage} from '../../../actions/board_actions';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.boardId;
  return {
    boardId: id
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateBoardStage: (stage, id) => dispatch(updateBoardStage(stage, id))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShowBoard)
);
