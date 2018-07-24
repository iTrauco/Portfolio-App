import React, { Component } from 'react';
import GageLib from 'gages-library';
import '../../styles/components/ballpit.css';
import $ from 'jquery';
import Ball from './Ball';

// Adjustable variables
var ballSize = [0.5, 3]; // ball size in vw
var friction = 0.999;
var ballCount = [50, 60];
var mouseForce = 10;

class Ballpit extends Component {
  constructor(options) {
    super(options);

    // Tracking the mouse position
    this.mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    $(window).on('mousemove', this.trackMouse.bind(this));

    // All of the balls
    this.balls = [];

    // Update the balls
    this.update();
  }

  /* ** React Methods ** */
  componentDidMount() {
    this.el = $('.Ballpit');
    this.generateBalls();
  }
  render() {
    return <div className="Ballpit" />;
  }

  /* ** My Methods ** */

  // Updating all of the balls
  update() {
    for (var i = 0; i < this.balls.length; i++) {
      var ball = this.balls[i];
      ball.update({ x: this.mouse.x, y: this.mouse.y });
    }
    window.requestAnimationFrame(this.update.bind(this));
  }

  // Generate the balls
  generateBalls() {
    var count = GageLib.math.getRandom(ballCount[0], ballCount[1]);
    for (var i = 0; i < count; i++) {
      this.balls.push(
        new Ball({
          ballSize: ballSize,
          friction: friction,
          container: this.el,
          mouseForce: mouseForce
        })
      );
    }
  }

  // Tracking the mouse position
  trackMouse(e) {
    this.mouse.x = e.pageX;
    this.mouse.y = e.pageY;
  }
}

export default Ballpit;
