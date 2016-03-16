import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools'
import firebaseTweets from '../middleware/firebaseTweets'

export default function configureStore(initialState){
  return createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(thunk, firebaseTweets),
        DevTools.instrument()
      )
  );
}