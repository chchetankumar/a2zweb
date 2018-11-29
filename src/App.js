import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './scss/toolkit/assets/index.scss';
import HomePage from './pages/homepage';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default App;
