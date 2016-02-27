
import React from 'react';
import ClassNames from 'classnames';
import Tweet from './Tweet.jsx';

class TimeLine extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    onNewTweet(e) {
        //...
    }
    
    getTimelineOffset() {
        return new Date().now;
    }
    
    render() {
        //<ul id="timeline_list" class="timeline">
        var timelineClass = ClassNames('timeline');
        
        var tweets = [];
        
        this.props.tweets.forEach(function(tweet){
            tweets.push(
            <Tweet tweetUser={tweet.userName} offsetTime={new Date().now} tweetTime={tweet.timeStamp} tweetContent={tweet.text} />
            );
        });
        return (<ul className={timelineClass}>{tweets.reverse()}</ul>);
    }
}

export default TimeLine;