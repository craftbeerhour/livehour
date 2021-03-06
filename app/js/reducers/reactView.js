import { REQUEST_TWEETS, ADD_TWEET, NEW_TWEETS } from '../constants/actionTypes.js'


export default function reactView(state = {}, action) {
  switch (action.type){
    case REQUEST_TWEETS :
      return Object.assign( {}, state, {fetchingTweets: true})
    case ADD_TWEET :
      const tweetList = [action.tweet, ...state.tweets]
      return Object.assign({}, state, {tweets: tweetList})
    case NEW_TWEETS:
      const tweets = [...action.tweets.slice(0,1), ...state.tweets]
      return Object.assign({}, state, {fetchingTweets: false, tweets: tweets})
    default :
      return state
  }
}