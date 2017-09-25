import {connect} from 'react-redux';
import ShowBoard from './show_board.jsx';
import {withRouter} from 'react-router';
import {requestBoard} from '../../../actions/board_actions';

const mapStateToProps = (state, ownProps) => ({
  boardId: ownProps.match.params.boardId
});

const mapDispatchToProps = (dispatch) => ({
  requestBoard: (id) => (dispatch(requestBoard(id)))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShowBoard)
);
