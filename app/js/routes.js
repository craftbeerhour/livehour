import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import IndexPage from './containers/IndexPage'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={IndexPage} />
    </Route>
)