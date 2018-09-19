import React, { Component } from 'react';
import Home from './pages/Home/Home';
import './styles/global.css';
import './styles/fonts.css';
import './styles/font-awesome/css/all.css';
import io from 'socket.io-client';

class App extends Component {
  constructor(options) {
    super(options);

    this.socket = io.connect('http://192.241.229.157:3001');
  }

  render() {
    return (
      <div className="App">
        <Home socket={this.socket} />
      </div>
    );
  }
}

export default App;
