
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
        
        this.props.tweets.forEach(function(tweet, index){
            var tweetInverted = false; 
            if (index % 2) {
                tweetInverted = true;
            }
            
            tweets = [...tweets,
            <Tweet 
                tweetInverted={tweetInverted}
                tweetUser={tweet.userName}
                offsetTime={tweet.offsetTime}
                tweetTime={tweet.timeStamp}
                tweetContent={tweet.text} 
            />
            ];
        });
        return (<ul className={timelineClass}>{tweets.reverse()}</ul>);
    }
}

export default TimeLine;