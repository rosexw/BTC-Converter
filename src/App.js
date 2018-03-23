import React, { Component } from 'react';
import './App.css';
import { Converter } from './converter.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>BTC Converter</h1>
        <Converter />
      </div>
    );
  }
}

export default App;
