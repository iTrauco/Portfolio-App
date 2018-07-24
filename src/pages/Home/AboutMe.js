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
        </div>
      </div>
    );
  }
}
