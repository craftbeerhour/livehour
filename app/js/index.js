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
    reactView: {
        playbackSpeed: 1,
        tweets: [],
        hourName: 'CraftBeerHour'
        
    }
}

const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store)

render(
    <Root store={ store } history={ history } />,
    document.getElementById('app')
)