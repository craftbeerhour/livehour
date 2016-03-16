import reactView from './reactView'
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

const rootReducer = combineReducers({
    reactView,
    routing
})

export default rootReducer