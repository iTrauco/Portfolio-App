import React, { Component } from 'react';
import '../styles/home.css';

class App extends Component {
  render() {
    return (
      <div className="Home">
        <div className="header">
          {/* The Page Title */}
          <div className="title-container">
            <div className="title">Gage Henderson</div>
            <div className="title transition">Gage Henderson</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
