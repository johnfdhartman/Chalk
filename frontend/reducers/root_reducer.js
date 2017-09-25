import {sessionReducer} from './session_reducer';
import errorsReducer from './errors_reducer.js';
import {boardReducer} from './board_reducer.js';
import {combineReducers} from 'redux';


const RootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  board: boardReducer
});
export default RootReducer;
