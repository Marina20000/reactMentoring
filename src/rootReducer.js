import * as reducers from './reducers/reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers(reducers);

export default rootReducer;