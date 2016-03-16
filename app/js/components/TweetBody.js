import React, { Component } from 'react'


export default class TweetBody extends Component {
    render() {
        return <div className="timeline-body">
                <p>{this.props.content}</p>
                <p>@{this.props.user}</p>
               </div>
    }
}