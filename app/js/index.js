import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import Root from './containers/Root'
import configureStore from './store/configureStore'

const initialState = {
    tweetBuffer: [],
    tweetRegulator: {
        timeoutId: 0,
        delay: 1000
    },
    reactView: {
        tweets: [{id:123, user:'tomwilderspin', time:'a minute ago', text:'hi some tweet content #craftbeerhour'}],
        hourName: 'CraftBeerHour'
        
    }
}

const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store)

render(
    <Root store={ store } history={ history } />,
    document.getElementById('app')
)