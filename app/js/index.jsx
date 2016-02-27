import React from 'react';
import {render} from 'react-dom';
import ClassNames from 'classnames';
import Header from './components/Header.jsx';
import TimeLine from './components/TimeLine.jsx';

class App extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (<div className={ClassNames('container')}>
        <Header hourName={this.props.hourName} />
        <TimeLine tweets={this.props.tweets} />
      </div>);
  }
}

var tweets = [
  { userName: 'tomwilderspin', text: 'hi this is an awesome tweet', timeStamp: 'Sat Feb 27 19:12:30 +0000 2016'},
  { userName: 'craftbeerhour', text: 'hi this is an awesome tweet at @someone', timeStamp: 'Sat Feb 27 19:20:30 +0000 2016'},
  { userName: 'tomwilderspin', text: 'another tweet with some guff in it #stupidguff', timeStamp: 'Sat Feb 27 19:38:30 +0000 2016'},
  ];

var hourName = 'CraftBeerHour';

render(<App tweets={tweets} hourName={hourName}/>, document.getElementById('app'));