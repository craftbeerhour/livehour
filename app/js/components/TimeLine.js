import React, { Component } from 'react'

import Tweet from './Tweet'

export default class TimeLine extends Component {
    
    componentWillUpdate(nextProps, nextState) {
        this.props.showTweets()
    }
    
    render() {
        
        let tweets = this.props.tweets.map(function(tweet,index){
            return <Tweet 
                        key={tweet.id}
                        inverted={index % 2 ? true : false}
                        user={tweet.user}
                        time={tweet.time}
                        text={tweet.text}
                    />
        })
        
        return <ul className="timeline">{tweets}</ul>
    }
    
} 