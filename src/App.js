import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Home/>
        </header>
      </div>
    );
  }
}

export default App;
