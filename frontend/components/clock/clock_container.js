import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import Clock from './clock';
import {updateCreateBoardStage} from '../../actions/board_actions';

const mapStateToProps = (state, ownProps) => ({
  path: ownProps.match.path,
  createBoardStage: state.board.createBoardStage

});

const mapDispatchToProps = (dispatch) => ({
  updateCreateBoardStage: (stage) =>
    dispatch(updateCreateBoardStage(stage))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Clock)
);
