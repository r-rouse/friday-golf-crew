import { combineReducers } from 'redux';
import playerManagementReducer from './playerReducer';

const rootReducer = combineReducers({
  player: playerManagementReducer
  // Add other reducers here
});

export default rootReducer;
