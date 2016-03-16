import Moment from 'moment'

import {FETCH_TWEETS, ADD_TWEETS } from '../constants/actionTypes'


const firebase = new Firebase('https://cbh-livehour.firebaseio.com/');

export default store => next => action => {
    
    //grabs tweets from firebase
    
    if(action.type === FETCH_TWEETS  ) {
        firebase.child('cbh-rainbow').on('value', function(data){
            
            const newData = data.val();
            
            const tweets = Object.keys(newData).map( (id) => {
               
               const tweet = newData[id];
               return {
                    id,
                    user: tweet.user.screen_name,
                    time: Moment(tweet.created_at, 'dd MMM DD HH:mm:ss ZZ YYYY', 'en').fromNow(),
                    text: tweet.text
                }
            });
            
            next({type: ADD_TWEETS, tweets});
        })
    }
    
    return next(action);
}