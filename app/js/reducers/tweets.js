import { REQUEST_TWEETS, RECEIVE_TWEETS } from '../actions'

function tweets(state = { 
    tweets: [],
    tweetDataSet: '',
    fetching: false
}, action) {

    switch (action.type) {
        case RECEIVE_TWEETS : 
            return Object.assign({}, state, {
                rawTweets: [ action.tweets, ...state.rawTweets ],
                fetching: false
            })
        case REQUEST_TWEETS :
            return Object.assign({}, state, {fetching: true})
        default : return state;
    }
}