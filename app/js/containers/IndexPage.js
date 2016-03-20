import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getTweets, showTweet } from '../actions'

import TimeLine from '../components/TimeLine'


class IndexPage extends Component {
    
    componentDidMount() {
        this.props.getTweets()
    }
 
     render(){
         return <TimeLine tweets={this.props.tweets} showTweets={this.props.showTweet} />
     }
    
}

const mapStateToProps = (state) => {
    
    return {
        tweets: state.reactView.tweets
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTweets: () => {
            dispatch(getTweets())
        },
        showTweet: () => {
            dispatch(showTweet())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)