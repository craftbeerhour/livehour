import { NEW_TWEETS, ADD_TWEET } from '../constants/actionTypes.js'


export default function tweetBuffer(state = {}, action) {
    switch (action.type) {
        case NEW_TWEETS :
            const tweets = !state.length ?
                action.tweets.slice(0,0).concat(action.tweets.slice(1)):
                action.tweets;
            return [...state, ...tweets]
        case ADD_TWEET :
            return state.slice(0,0).concat(state.slice(1))
        default :
            return state
    }
}