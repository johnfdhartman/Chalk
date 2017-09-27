import {connect} from 'react-redux';
import ShowBoard from './show_board.jsx';
import {withRouter} from 'react-router';
import {requestBoard, updateBoardStage} from '../../../actions/board_actions';

const mapStateToProps = (state, ownProps) => ({
  boardId: ownProps.match.params.boardId,
  boardStage: state.board.boardStage
});

const mapDispatchToProps = (dispatch) => ({
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShowBoard)
);
