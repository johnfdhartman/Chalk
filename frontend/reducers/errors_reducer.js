import {combineReducers} from 'redux';
import {sessionErrorsReducer} from './session_errors_reducer';
import {boardErrorsReducer} from './board_errors_reducer';
import {boardThumbsErrorsReducer} from './board_thumbs_errors_reducer';

export default combineReducers({
  sessionErrors: sessionErrorsReducer,
  boardErrors: boardErrorsReducer,
  boardThumbsErrors: boardThumbsErrorsReducer
});
