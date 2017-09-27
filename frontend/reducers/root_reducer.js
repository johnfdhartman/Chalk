import {sessionReducer} from './session_reducer';
import errorsReducer from './errors_reducers/errors_reducer.js';
import {boardsReducer} from './boards_reducer.js';
import {boardThumbsReducer} from './board_thumbs_reducer';
import {combineReducers} from 'redux';


const RootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  boards: boardsReducer,
  boardThumbs: boardThumbsReducer
});
export default RootReducer;
