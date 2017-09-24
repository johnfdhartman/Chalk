import {combineReducers} from 'redux';
import {sessionErrorsReducer} from './session_errors_reducer';
import {createBoardErrorsReducer} from './create_board_errors_reducer';

export default combineReducers({
  sessionErrors: sessionErrorsReducer,
  createBoardErrors: createBoardErrorsReducer
});
