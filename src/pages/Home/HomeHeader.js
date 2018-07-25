import React, { Component } from 'react';
import '../../styles/pages/home/home-header.css';
import $ from 'jquery';
import CanvasBall from '../../components/CanvasBall/CanvasBall';

class HomeHeader extends Component {
  componentDidMount() {
    if (this.props.isShown) {
      this.triggerAnimations();
    }

    new CanvasBall({
      canvas: $('.HomeHeader').children('canvas'),
      container: $('.HomeHeader')
    });
  }
  componentWillReceiveProps(newProps) {
    if (newProps.isShown) {
      this.triggerAnimations();
    }
  }
  render() {
    return (
      <div className="HomeHeader">
        <canvas />
        <div className="side left">
          <div className="title">
            Clean, beautiful websites made with &hearts;{' '}
          </div>
        </div>
        <div className="divider" />
        <div className="instructions">(Move Your Mouse)</div>
        <div className="side right">
          <div className="text-container">
            <div className="header-text">Hi, I'm Gage</div>
            <div className="sub-text">
              I'm a web designer and developer currently residing in Portland,
              Oregon.
              <br />
              <br />
              I create clean, modern, creative websites and interactive web
              experiences.
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Trigger the intro animations
  triggerAnimations() {
    $('.HomeHeader').addClass('anim');
  }
}

export default HomeHeader;
