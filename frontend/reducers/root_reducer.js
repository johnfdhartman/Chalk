import {sessionReducer} from './session_reducer';
import errorsReducer from './errors_reducers/errors_reducer.js';
import {boardsReducer} from './boards_reducer.js';
import {usersReducer} from './users_reducer.js';
import {combineReducers} from 'redux';


const RootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  boards: boardsReducer,
  users: usersReducer
});

export default RootReducer;
