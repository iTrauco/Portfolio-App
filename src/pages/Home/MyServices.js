import React, { Component } from 'react';
import '../../styles/pages/home/my-services.css';

class MyServices extends Component {
  render() {
    return (
      <div className="MyServices">
        <div className="content">
          <div className="title">My Services:</div>
          <div className="service">Fully Custom Design</div>
          <div className="service">Wordpress Sites</div>
          <div className="service">Single-Page Web-Applications</div>
          <div className="service">Updates to existing websites</div>
          <div className="service">3d Web-Experiences</div>
          <div className="service">HTML5 Games</div>
        </div>
      </div>
    );
  }
}

export default MyServices;
