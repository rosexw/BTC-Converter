import React, { Component } from 'react';
import './App.css';
import Converter from './components/converter.component';
import AccountBalance from './components/account-balance.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>BTC Converter</h1>
        <AccountBalance />
        <Converter />
      </div>
    );
  }
}

export default App;
