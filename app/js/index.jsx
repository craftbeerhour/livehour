import React from 'react';
import {render} from 'react-dom';
import ClassNames from 'classnames';
import Header from './components/Header.jsx';
import TimeLine from './components/TimeLine.jsx';

import { createStore } from 'redux'

class App extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (<div className={ClassNames('container')}>
        <Header hourName='CraftBeerHour' />
        <TimeLine tweets={this.props.tweets} />
      </div>);
  }
}



render(<App tweets={tweets} hourName={hourName}/>, document.getElementById('app'));