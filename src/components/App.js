import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import RightContainer from './RightContainer'
import LeftContainer from './LeftContainer'

import '../styles/App.css';

class App extends Component {
  render() {

    //adds a unique class to the learn-to-code webapge if the window.location.href equals the learn-to-code webpage path. This way, the styling can be controlled from the body tag level.
    if (window.location.href === 'http://localhost:3000/learn-to-code') {
      console.log('learn-to-code');
      document.body.classList.add('learn-to-code');
    } else {
      document.body.classList.remove('learn-to-code');
    }

    return (
      <div className="App">
        <RightContainer />
        <LeftContainer />
      </div>
    );
  }
}

export default App;