
import React from 'react';
import ClassNames from 'classnames';
import Moment from 'moment';

class Tweet extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            tweetUser: this.props.tweetUser,
            tweetTime: this.getTweetTime(this.props.offsetTime, this.props.tweetTime),
            tweetContent: this.props.tweetContent
        };
    }
    
    getTweetTime(now, before) {
        // sets moment from relative time
        return Moment(before, 'dd MMM DD HH:mm:ss ZZ YYYY', 'en').from(now);
    }
    
    render() {
        
        var badgeClass = ClassNames('timeline-badge'),
            panelClass = ClassNames('timeline-panel');
            
            return (<li><div className={badgeClass}></div><div className={panelClass}>
                        <TweetHeading timeFrom={this.state.tweetTime} />
                        <TweetBody tweetContent={this.state.tweetContent} tweetUser={this.state.tweetUser} />
                        </div>
                    </li>);
    }
}

class TweetBody extends React.Component {
    
    render() {
        var bodyClass = ClassNames('timeline-body');
        
        return (<div className={bodyClass}><p>{this.props.tweetContent}</p><p>@{this.props.tweetUser}</p></div>);
    }
}

class TweetHeading extends React.Component {
    
    render() {
        var headingClass = ClassNames('timeline-heading'),
            smallTextClass = ClassNames('text-muted'),
            iconClass = ClassNames('glyphicon', 'glyphicon-time');
        
        return (<div className={headingClass}><p><small className={smallTextClass}>{this.props.timeFrom} <i className={iconClass}></i></small></p></div>);
    }
}

export default Tweet;