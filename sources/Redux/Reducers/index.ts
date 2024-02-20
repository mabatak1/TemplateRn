// Redux: Root Reducer
import {combineReducers} from 'redux';
import userReducer from './userReducer';

const rootReducer: any = combineReducers({
  userReducer,
});
// Exports
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
