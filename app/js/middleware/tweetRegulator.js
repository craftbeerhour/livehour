import { ADD_TWEET, SHOW_TWEET } from '../constants/actionTypes'

//regulates the feed of tweets to the timeline (stops mass insertions)
export default store => next => action => {
  
  if (!store.getState().tweetBuffer.length) {
    return next(action)
  }
    
  const timeoutId = setTimeout(
    () => next({type: ADD_TWEET, tweet: action.tweet, timeoutId: timeoutId }),
    store.getState().tweetRegulator.delay
  )
  
   return function clear(timeoutId) {
     clearTimeout(timeoutId);
   }
}