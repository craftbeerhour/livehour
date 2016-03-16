import { ADD_TWEET } from '../constants/actionTypes.js'

export default function tweetRegulator(state = {}, action) {
    switch (action.type) {
        case ADD_TWEET :
            return Object.assign({}, state, {timeoutId: action.timeoutId}) 
        default :
            return state
    }
}