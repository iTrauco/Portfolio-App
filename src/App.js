import React, { Component } from 'react';
import Home from './pages/Home/Home';
import './styles/global.css';
import './styles/fonts.css';
import './styles/font-awesome/css/all.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
