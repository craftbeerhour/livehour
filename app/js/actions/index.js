import * as actionTypes from '../constants/actionTypes'

export function getTweets(){
  return { 
    type : actionTypes.REQUEST_TWEETS
  }
}

