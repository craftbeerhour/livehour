import * as actionTypes from '../constants/actionTypes'

export function getTweets(){
  return { 
    type : actionTypes.REQUEST_TWEETS
  }
}

export function showTweet(){
  return {
    type: actionTypes.SHOW_TWEET
  }
}

