import { createStore, applyMiddleware, combineReducers } from 'redux';
import rootReducer from './../rootReducer';
import thunk from 'redux-thunk';
import { hashHistory } from 'react-router';
import { routerMiddleware, routerReducer } from 'react-router-redux';


/**
 * Logs all actions and states after they are dispatched.
 */
const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
  }

  const reducer = combineReducers({
      routing: routerReducer,
      app: rootReducer
  })
  
export default function configureStore(initialState) {
    const store = createStore(reducer, initialState, applyMiddleware(thunk,logger,routerMiddleware(hashHistory)
     // , promiseExtractMiddleware
    ));
    return store;
}



//const counter = (state = 0, action) => {
//switch (action.type) {
//case 'INCREMENT':
// return state+1;
//case 'DECREMENT':
//return state-1;
//default: return state;
//}
//}
//
//const { createStore } = Redux;
//const store = createStore (counter);

//const render = () => {
//document.body.innerText = store.getState();
//}

//store.subscribe(render);
//render();
//document.addEventListener('click', () => {
//store.dispatch ({type:'INCREMENT'});
//})
