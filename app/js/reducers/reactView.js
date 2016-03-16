import { ADD_TWEETS } from '../constants/actionTypes.js'


export default function reactView(state = {}, action) {
  switch (action.type){
    case ADD_TWEETS :
        let newTweetList = [...state.tweets, action.tweets]
      return Object.assign( {}, state, {tweets: newTweetList})
    default :
      return state
  }
}