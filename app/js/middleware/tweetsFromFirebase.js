let Firebase = new FireBase('https://cbh-livehour.firebaseio.com/');


function getTweetsFromFireBase(FireBase, buffer) {
    FireBase.child('cbh-rainbow').on('value', function(rawTweet) {
        return [...buffer, rawTweet];
    });
}

export const CALL_FOR_TWEET = Symbol('Call For Tweet');

export default store => next => action {
    
    const callForTweet = action['CALL_FOR_TWEET'];
    //ignore action if its not for new tweets
    if (typeof callForTweet === 'undefined') {
        return next(action);
    }
    
    let { child } = callForTweet;
    
    if (typeof child === 'function') {
        child = child(store.getState())
    }

    if (typeof child !== 'string') {
        throw new Error('Specify a string for firebase child location')
    }
    
    return callFirebase(endpoint, buffer)
}