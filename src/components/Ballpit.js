import $ from 'jquery';
import GageLib from '../gages-library/gagelib';

// Adjustable Variables
var amount = 100;
var startVel = [2, 2];
var ballSize = [15, 35];
var friction = 0.99;
var mouseForce = 0.5;
var bounce = 0.95;
var maxVelocity = 10;
var maxPushRange = 250;

export default class Ballpit {
  constructor(options) {
    // Store values
    this.canvas = options.canvas;
    this.c = this.canvas[0].getContext('2d');

    // Dimensions
    this.width = options.width;
    this.height = options.height;
    this.setDimensions(options.width, options.height);

    // The balls
    this.balls = [];
    this.generateBalls();

    // The mouse
    this.mouse = {
      x: -1,
      y: -1
    };
    $(window).on('mousemove', this.trackMouse.bind(this));

    // Start the update loop
    this.update();
  }

  /* ** Primary Functions ** */
  update() {
    // Clear the canvas
    this.c.clearRect(0, 0, this.c.canvas.width, this.c.canvas.height);

    // Update the balls IF you can even see the canvas
    if (this.isOnScreen()) {
      for (var i = 0; i < this.balls.length; i++) {
        var ball = this.balls[i];

        // Draw the balls
        this.draw(ball);

        // Update all of the stuff
        this.move(ball);
        this.boundary(ball);
        this.push(ball);
      }
    }

    window.requestAnimationFrame(this.update.bind(this));
  }
  draw(ball) {
    this.c.fillStyle = '#596DFF';
    this.c.beginPath();
    this.c.arc(ball.x, ball.y, ball.size, 0, 2 * Math.PI, false);
    this.c.fill();
  }

  /* ** Ball Functions ** */
  move(ball) {
    var distance = GageLib.math.getDistance(
      this.mouse.x,
      this.mouse.y,
      ball.x,
      ball.y
    );

    // Velocity
    ball.x += ball.xvel;
    ball.y += ball.yvel;

    // Maximum velocity
    if (ball.xvel > maxVelocity) {
      ball.xvel = maxVelocity;
    } else if (ball.xvel < -maxVelocity) {
      ball.xvel = -maxVelocity;
    }
    if (ball.yvel > maxVelocity) {
      ball.yvel = maxVelocity;
    } else if (ball.yvel < -maxVelocity) {
      ball.yvel = -maxVelocity;
    }
    if (
      this.mouse.y > 0 &&
      this.mouse.y < this.c.canvas.height &&
      this.mouse.x > 0 &&
      this.mouse.x < this.c.canvas.width &&
      distance <= maxPushRange
    ) {
      ball.xvel *= friction;
      ball.yvel *= friction;
    }
  }
  boundary(ball) {
    if (ball.x - ball.size / 2 < 0) {
      ball.x = ball.size / 2 + 1;
      ball.xvel *= -bounce;
    } else if (ball.x + ball.size / 2 > this.c.canvas.width) {
      ball.x = this.c.canvas.width - ball.size / 2 - 1;
      ball.xvel *= -bounce;
    }
    if (ball.y - ball.size / 2 < 0) {
      ball.y = ball.size / 2 + 1;
      ball.yvel *= -bounce;
    } else if (ball.y + ball.size / 2 > this.c.canvas.height) {
      ball.y - this.c.canvas.height - ball.size / 2 - 1;
      ball.yvel *= -bounce;
    }
  }
  push(ball) {
    if (
      this.mouse.y > 0 &&
      this.mouse.y < this.c.canvas.height &&
      this.mouse.x > 0 &&
      this.mouse.x < this.c.canvas.width
    ) {
      var angle =
        Math.atan2(this.mouse.y - ball.y, this.mouse.x - ball.x) + Math.PI;
      var distance = GageLib.math.getDistance(
        this.mouse.x,
        this.mouse.y,
        ball.x,
        ball.y
      );

      if (distance <= maxPushRange) {
        ball.xvel += Math.cos(angle) * (mouseForce / (distance / 100));
        ball.yvel += Math.sin(angle) * (mouseForce / (distance / 100));
      }
    }
  }

  /* ** Utility Functions ** */
  // Set the dimensions of the canvas
  setDimensions(width, height) {
    this.canvas.attr('width', width);
    this.canvas.attr('height', height);
  }

  // Track the mouse position
  trackMouse(e) {
    this.mouse.x = e.pageX;
    this.mouse.y = e.pageY - this.canvas.offset().top;
  }

  // Generate the balls
  generateBalls() {
    for (var i = 0; i < amount; i++) {
      var x = GageLib.math.getRandom(0, this.width);
      var y = GageLib.math.getRandom(0, this.height);
      var dir = GageLib.math.getRandom(0, Math.PI * 2 * 1000) / 1000;
      var vel = GageLib.math.getRandom(startVel[0], startVel[1]);
      var xvel = Math.cos(dir) * vel;
      var yvel = Math.sin(dir) * vel;
      var size =
        GageLib.math.getRandom(ballSize[0] * 1000, ballSize[1] * 1000) / 1000;

      this.balls.push({
        x: x,
        y: y,
        dir: dir,
        xvel: xvel,
        yvel: yvel,
        size: size
      });
    }
  }

  // Check if the canvas is in the user's viewport
  isOnScreen() {
    var x = this.canvas.offset().left;
    var y = this.canvas.offset().top;
    var width = this.width;
    var height = this.height;
    var screenX = 0;
    var screenY = $(window).scrollTop();
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    if (
      x <= screenX + screenWidth &&
      x + width >= screenX &&
      y <= screenY + screenHeight &&
      y + height >= screenY
    ) {
      return true;
    } else {
      return false;
    }
  }
}
