
import {connect} from 'react-redux';
import Clock from './clock';
import {updateCreateBoardStage} from '../../actions/board_actions';

const mapStateToProps = (state) => ({
  createBoardStage: state.board.createBoardStage
});

const mapDispatchToProps = (dispatch) => ({
  updateCreateBoardStage: (stage) =>
    dispatch(updateCreateBoardStage(stage))
});

export default connect(mapStateToProps, mapDispatchToProps)(Clock);
