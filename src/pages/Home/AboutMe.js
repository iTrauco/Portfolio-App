import React, { Component } from 'react';
import '../../styles/pages/home/about-me.css';
import photo from '../../assets/images/me.jpg';
import Clouds from '../../components/Clouds/Clouds';
import $ from 'jquery';

export default class AboutMe extends Component {
  constructor(options) {
    super(options);
  }
  componentDidMount() {
    new Clouds({ el: $('.self-portrait') });

    // Calculate when the intro animations should be triggered
    this.el = $('.AboutMe');
    this.scrollTrigger = this.el.offset().top + this.el.height() * 0.2;

    // Immediately check if they should be triggered
    this.checkScroll(this.props.scrollY);
  }
  componentWillReceiveProps(newProps) {
    this.checkScroll(newProps.scrollY);
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

  // Check the scroll position and see if the user is scrolled over
  // the component
  checkScroll(scrollY) {
    if (scrollY + window.innerHeight > this.scrollTrigger) {
      this.el.addClass('anim');
    }
  }
}
