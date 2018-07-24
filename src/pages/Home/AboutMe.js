import React, { Component } from 'react';
import '../../styles/pages/home/about-me.css';
import photo from '../../assets/images/me.jpg';
import Clouds from '../../components/Clouds/Clouds';
import $ from 'jquery';

export default class AboutMe extends Component {
  componentDidMount() {
    new Clouds({ el: $('.self-portrait') });
  }
  render() {
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
            macbook. I started out making games in my free time, which
            eventually led to me getting a full-time job as a web developer.<br />
            <br />
            Since then, I have become familiar with an array of techonology:
            HTML, CSS, SASS, Javascript, Jquery, ReactJS, NodeJS, ThreeJS, SQL,
            and more.
          </div>
        </div>
      </div>
    );
  }
}
