import { ADD_TWEET, NEW_TWEETS } from '../constants/actionTypes'

//regulates the feed of tweets to the timeline (stops mass insertions)
export default store => next => action => {
  
  if (!store.getState().tweetBuffer.length) {
    clearInterval(store.getState().tweetRegulator.timeoutId)
  }
  
  if (!store.getState().tweetBuffer.length) {
    return next(action)
  }
    

  let timeoutId = setInterval(
    () => next({type: ADD_TWEET, tweet: tweet, timeoutId: timeoutId }),
    store.getState().tweetRegulator.delay
  )
  
   return next(action)
}