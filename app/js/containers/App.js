import React, { Component } from 'react'
import { connect } from 'react-redux' 

import HeaderNav from '../components/HeaderNav'


class App extends Component {
    render() {
        return (
            <div className="container">
                <HeaderNav title={this.props.hourName} />
                {this.props.children}
            </div>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        hourName: state.reactView.hourName
    }
}

export default connect(mapStateToProps)(App)