import React, { Component } from 'react';
import '../../styles/pages/home/home-header.css';
import Ballpit from '../../components/Ballpit/Ballpit';

class HomeHeader extends Component {
  render() {
    return (
      <div className="HomeHeader">
        <Ballpit />
        <div className="side left">
          <div className="title">
            Clean, beautiful websites made with &hearts;{' '}
          </div>
        </div>
        <div className="divider" />
        <div className="side right">
          <div className="text-container">
            <div className="header-text">Hi, I'm Gage</div>
            <div className="sub-text">
              I'm a web designer and developer currently residing in Portland,
              Oregon.
              <br />
              <br />
              I create clean, modern, creative websites and interactive
              web-experiences.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeHeader;
