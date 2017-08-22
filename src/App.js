import React from 'react';
import Header from './components/header/header.js';
import { Route } from 'react-router-dom'
import Home from './components/home/home.js';
import Grid from './components/grid/grid.js';
import Footer from './components/footer/footer.js';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
            <Header />
              <div className="container-fluid main-content">
                <Route exact path="/" component={Home} />
                <Route path="/results" component={Grid} />
              </div>
              <Footer />
      </div>
    );
  }
}

export default App;
