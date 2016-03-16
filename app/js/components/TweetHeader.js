import React, { Component } from 'react'

export default class TweetHeader extends Component {
    render() {
        return <div className="timeline-heading">
                    <p><small className="text-muted">
                    {this.props.time} <i className="glyphicon glyphicon-time"></i>
                    </small></p>
                </div>
                    
    }
}