import { combineReducers } from 'redux';
import playerReducer from './playerReducer';

const rootReducer = combineReducers({
  player: playerReducer
  // Add other reducers here
});

export default rootReducer;
