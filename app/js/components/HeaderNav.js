import React, { Component } from 'react'

export default class HeaderNav extends Component {
    render() {
        return <div className= "page-header page-title">
                    <h1>#{this.props.title}</h1>
              </div>
    }
}