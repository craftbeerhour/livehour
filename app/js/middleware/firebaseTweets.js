import {RECEIVE_TWEETS, REQUEST_TWEETS } from '../actions'


let firebase = new Firebase('https://cbh-livehour.firebaseio.com/');

const getTweets = store => next => action => {
    
    //grabs tweets from firebase
    
    if(action.type === REQUEST_TWEETS  ) {
        firebase.child(action.dataSetName).on('value', function(data){
            
            const newData = data.val();
            const tweets = Object.keys(newData).map( (id) => {
               
               const tweet = newData[id];
               return {
                    id,
                    user: tweet.user.screen_name,
                    time: tweet.created_at,
                    text: tweet.text
                }
            });
            
            next({type: RECEIVE_TWEETS, tweets});
        })
    }
    
    return next(action);
}