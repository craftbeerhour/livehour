import { createStore } from 'redux'
import mainReducer from '../reducers'

export default function configureStore(initialState) {
  const store = createStore(mainReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}