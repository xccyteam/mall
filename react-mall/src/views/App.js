import React, { Component } from 'react';
import Test from '../components/test.js'
import '../less/App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Test></Test>
        hello world
      </div>
    );
  }
}

export default App;
