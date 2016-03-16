import { NEW_TWEETS, ADD_TWEET } from '../constants/actionTypes.js'


export default function tweetBuffer(state = {}, action) {
    switch (action.type) {
        case NEW_TWEETS :
            return [...state, ...action.tweets]
        case ADD_TWEET :
            return state.slice(0,0).concat(state.slice(1))
        default :
            return state
    }
}