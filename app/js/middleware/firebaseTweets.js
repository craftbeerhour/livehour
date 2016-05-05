import Moment from 'moment'

import {REQUEST_TWEETS, NEW_TWEETS } from '../constants/actionTypes'


const firebase = new Firebase('https://cbh-livehour.firebaseio.com/');

export default store => next => action => {
    
    //grabs tweets from firebase
    
    if(action.type === REQUEST_TWEETS  ) {
        firebase.child('cbh-rainbow').on('value', function(data){
            
            let newData = data.val()
            
            const tweets = Object.keys(newData).map( (key) => {
                
                let tweet = newData[key]
              
               return {
                    id: tweet.id,
                    user: tweet.user.screen_name,
                    time: Moment(tweet.created_at, 'dd MMM DD HH:mm:ss ZZ YYYY', 'en').fromNow(),
                    text: tweet.text,
                    timeStamp: tweet.timestamp_ms
                }
            }).reverse()
            
            
            next({type: NEW_TWEETS, tweets: tweets});
        })
    }
    
    return next(action);
}