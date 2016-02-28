
import { NEW_TWEET } from '../middleware/tweetsFromFirebase'

export const NEW_TWEET_REQUEST = 'NEW_TWEET_REQUEST'
export const NEW_TWEET_SUCCESS = 'NEW_TWEET_SUCCESS'
export const NEW_TWEET_FAILURE = 'NEW_TWEET_FAILURE'

export function requestNewTweet(shardName) {
    return {
        [NEW_TWEET]: {
            types: [NEW_TWEET_REQUEST, NEW_TWEET_SUCCESS, NEW_TWEET_FAILURE],
            shardName
        }
    }
}



export function updateTweetTime(time) {
    return {type:'UPDATE_TWEET_TIME', time};
}