import { ADD_TWEET, SHOW_TWEET } from '../constants/actionTypes'

//pushes tweets to the view based on real time play back.
export default store => next => action => {
  
  if (!store.getState().tweetBuffer.length) {
    return next(action)
  }
  
  if(!action.type == SHOW_TWEET) {
    return next(action)
  }
  
  const newTweetTime = store.getState().tweetBuffer[0].timeStamp;
  
  const lastTweetTime = store.getState().reactView.tweets.length != 0 ?
    store.getState().reactView.tweets[0].timeStamp : 0;
    
  const playbackSpeed = store.getState().reactView.playbackSpeed;
  
  const delay = lastTweetTime == 0 ? 
    Math.ceil(1000 / playbackSpeed):
    Math.ceil((lastTweetTime - newTweetTime) / playbackSpeed);
    
  const timeoutId = setTimeout(
    () => next({type: ADD_TWEET, tweet: store.getState().tweetBuffer[0]}),
    delay
  )
  
   return function clear(timeoutId) {
     clearTimeout(timeoutId);
   }
}