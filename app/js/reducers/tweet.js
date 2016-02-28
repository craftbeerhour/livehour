import {NEW_TWEET_REQUEST, NEW_TWEET_SUCCESS, NEW_TWEET_FAILURE} from '../actions/timeLine'


function tweets(
    state = {isFetching: false, items: []},
    action
    ) {
        switch (action.type) {
         case NEW_TWEET_REQUEST :
             return Object.assign({}, state, {isFetching: true});
         case NEW_TWEET_SUCCESS : 
             return Object.assign({}, state, {isFetching:false, items: action.tweets});
         case NEW_TWEET_FAILURE :
             return Object.assign({}, state, {isFetching:false})
         default : return state;
        }
    }