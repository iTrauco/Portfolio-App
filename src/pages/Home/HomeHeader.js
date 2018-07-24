import React, { Component } from 'react';
import '../../styles/pages/home/home-header.css';

class HomeHeader extends Component {
  render() {
    return (
      <div className="HomeHeader">
        <div className="title-container">
          <div className="title">Gage Henderson</div>
          <div className="title transition">Gage Henderson</div>
        </div>
      </div>
    );
  }
}

export default HomeHeader;
