import React from 'react'
import Header from '../components/Header'
import TimeLine from '../components/TimeLine'
import ClassNames from 'classnames';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { tweetDataSet, tweets, fetching } = this.props
        return (<div className={ClassNames('container')}>
        <Header  />
        <TimeLine tweets={this.props.tweets} />
      </div>)
    }
    
}

function mapStateToProps (store) {
    
}