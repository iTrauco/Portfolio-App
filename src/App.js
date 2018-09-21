import React, { Component } from 'react';
import Home from './pages/Home/Home';
import './styles/global.css';
import './styles/fonts.css';
import './styles/font-awesome/css/all.css';
import io from 'socket.io-client';

class App extends Component {
  constructor(options) {
    super(options);
    var apiAddress = process.env.API_ADDRESS || 'http://localhost:3001';

    this.socket = io.connect(apiAddress);
    this.touchDevice = this.isTouchDevice();
  }

  render() {
    return (
      <div className="App">
        <Home socket={this.socket} isTouchDevice={this.touchDevice} />
      </div>
    );
  }

  // Check if the user is on a touch device
  isTouchDevice() {
    return (
      'ontouchstart' in window ||
      navigator.MaxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  }
}

export default App;
