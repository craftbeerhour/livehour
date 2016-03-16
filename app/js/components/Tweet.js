import React, { Component } from 'react'
import ClassNames from 'classnames'

import TweetHeader from './TweetHeader'
import TweetBody from './TweetBody'

export default class Tweet extends Component {
    render() {
        
        const invertedClass = ClassNames({"timeline-inverted": this.props.inverted})
        return (<li key={this.props.key} className={invertedClass}>
                    <div className="timeline-badge"></div>
                    <div className="timeline-panel">
                        <TweetHeader time={this.props.time} />
                        <TweetBody content={this.props.text} user={this.props.user} />
                    </div>
                </li>)
    }
}