
export const REQUEST_TWEETS = 'REQUEST_TWEETS';
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';

export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets: tweets,
    receivedAt: Date.now()
  }
}

export function requestTweets(dataSetName) {
    return {
        type: REQUEST_TWEETS,
        dataSet:dataSetName
    }
}