import getFilms  from './reducers/reducers';
import clickFilm  from './reducers/clickFilm';
import changePage from './reducers/changePage';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({getFilms, clickFilm, changePage});

export default rootReducer;