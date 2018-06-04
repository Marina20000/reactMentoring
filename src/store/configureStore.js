import { createStore, applyMiddleware } from 'redux';
//const {} createStore } = Redux;
//var createStore = Redux.createStore;
import rootReducer from './../rootReducer';
import thunk from 'redux-thunk';


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
  
   // Sends crash reports as state is updated and listeners are notified.

  // const promiseExtractMiddleware = store => next => action => {
  //   if (action.type !== "PROMISE_EXTRACT") {
  //     return next(action)
  //   }

  //   const {
  //     data,
  //     types: [eventStart, eventSuccess, eventFallback],
  //   } = action.payload;

  //   store.dispatch({
  //     type: eventStart
  //   })

  //   data.then((response) => {
  //     store.dispatch({
  //       type: eventSuccess,
  //       payload: response
  //     })
  //   }, (error) => {
  //     store.dispatch({
  //       type: eventFallback,
  //       payload: error
  //     })
  //   })
  // }

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk,logger
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
