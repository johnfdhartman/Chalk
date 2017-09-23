
import {connect} from 'react-redux';
import CreateClock from './create_clock';
import {updateCreateBoardStage} from '../../actions/create_board_actions';

const mapStateToProps = (state) => ({
  createBoardStage: state.createBoard.createBoardStage
});

const mapDispatchToProps = (dispatch) => ({
  updateCreateBoardStage: (stage) =>
    dispatch(updateCreateBoardStage(stage))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateClock);
