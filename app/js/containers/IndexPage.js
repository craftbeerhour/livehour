import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getTweets } from '../actions'

import TimeLine from '../components/TimeLine'


class IndexPage extends Component {
    
    componentDidMount() {
        this.props.getTweets()
    }
 
     render(){
         return <TimeLine tweets={this.props.tweets} />
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)