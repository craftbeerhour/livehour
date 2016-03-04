import { createStore, applyMiddleware } from 'redux'
import mainReducer from '../reducers'
import thunk from 'redux-thunk'
import firebaseTweets from '../middleware/firebaseTweets'

export default function configureStore(initialState) {
  const store = createStore(
    mainReducer,
    initialState,
    applyMiddleware(thunk),
    applyMiddleware(firebaseTweets)
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}