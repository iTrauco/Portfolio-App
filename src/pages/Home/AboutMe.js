import React, { Component } from 'react';
import '../../styles/pages/home/about-me.css';
import photo from '../../assets/images/me.jpg';

export default class AboutMe extends Component {
  render() {
    console.log(photo);
    return (
      <div className="AboutMe">
        <div className="side left">
          <div
            className="self-portrait"
            style={{ backgroundImage: `url("${photo}")` }}
          />
        </div>
        <div className="side right">
          <div className="header-text">Who am I?</div>
          <div className="sub-text">
            My love for coding began at 11 when I got my first hand-me-down
            macbook.
          </div>
        </div>
      </div>
    );
  }
}
