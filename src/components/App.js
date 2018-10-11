import React, { Component } from 'react';

import RightContainer from './RightContainer'
import LeftContainer from './LeftContainer'

import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RightContainer />
        <LeftContainer />
      </div>
    );
  }
}

export default App;