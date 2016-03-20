import { ADD_TWEET, SHOW_TWEET } from '../constants/actionTypes'

//regulates the feed of tweets to the timeline (stops mass insertions)
export default store => next => action => {
  
  if (!store.getState().tweetBuffer.length) {
    return next(action)
  }
  
  if(!action.type == SHOW_TWEET) {
    return next(action)
  }
    
  const timeoutId = setTimeout(
    () => next({type: ADD_TWEET, tweet: store.getState().tweetBuffer[0]}),
    store.getState().tweetRegulator.delay
  )
  
   return function clear(timeoutId) {
     clearTimeout(timeoutId);
   }
}