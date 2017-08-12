import React, { Component } from 'react';
import Header from './components/header/header.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
            <Header />
      </div>
    );
  }
}

export default App;
