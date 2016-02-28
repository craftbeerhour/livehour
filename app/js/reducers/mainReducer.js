
import { combineReducers } from 'redux'
import timeLine from './timeLine'
import tweet from './tweet'

const rootReducer = combineReducers({
  timeLine,
  tweet
})

export default rootReducer