import reactView from './reactView'
import tweetBuffer from './tweetBuffer'
import tweetRegulator from './tweetRegulator'
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

const rootReducer = combineReducers({
    reactView,
    tweetBuffer,
    tweetRegulator,
    routing
})

export default rootReducer