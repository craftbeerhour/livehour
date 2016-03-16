import * as actionTypes from '../constants/actionTypes'

export function getTweets(){
  return { 
    type : actionTypes.FETCH_TWEETS
  }
}