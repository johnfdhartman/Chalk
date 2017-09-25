import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import Clock from './clock';
import {updateBoardStage} from '../../actions/board_actions';

const mapStateToProps = (state, ownProps) => ({
  path: ownProps.match.path,
  boardStage: state.board.boardStage

});

const mapDispatchToProps = (dispatch) => ({
  updateBoardStage: (stage) =>
    dispatch(updateBoardStage(stage))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Clock)
);
