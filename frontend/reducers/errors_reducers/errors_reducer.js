import {combineReducers} from 'redux';
import {sessionErrorsReducer} from './session_errors_reducer';
import {boardsErrorsReducer} from './boards_errors_reducer';
import {usersErrorsReducer} from './users_errors_reducer';

export default combineReducers({
  sessionErrors: sessionErrorsReducer,
  boardsErrors: boardsErrorsReducer,
  usersErrors: usersErrorsReducer
});
