import $ from 'jquery';
import GageLib from 'gages-library';
import '../../styles/components/canvas-ball.css';

var size = [1, 10];
var launchSpeed = [-5, 5];
var amount = 10;
var mouseForce = 2;
var friction = 0.9;
var bounce = 2.5;

export default class CanvasBall {
  constructor(options) {
    // Store values
    this.container = options.container;
    this.canvas = options.canvas;
    this.c = this.canvas[0].getContext('2d');

    this.c.canvas.width = this.container.width();
    this.c.canvas.height = this.container.height();

    this.balls = [];
    this.generateBalls();

    this.mouse = { x: 0, y: 0 };
    $(window).on('mousemove', this.trackMouse.bind(this));

    this.update();
  }

  update() {
    for (var i = 0; i < this.balls.length; i++) {
      var ball = this.balls[i];
      this.c.fillStyle = '#596DFF';
      this.c.beginPath();
      this.c.arc(ball.x, ball.y, ball.size, 0, 2 * Math.PI, false);
      this.c.fill();

      ball.x += ball.xvel;
      ball.y += ball.yvel;
      if (ball.x + ball.size / 2 > this.c.canvas.width) {
        ball.x = this.c.canvas.width - ball.size / 2;
        ball.xvel *= -bounce;
      } else if (ball.x - ball.size / 2 < 0) {
        ball.x = ball.size / 2;
        ball.xvel *= -bounce;
      }
      if (ball.y - ball.size / 2 < 0) {
        ball.y = ball.size / 2;
        ball.yvel *= -bounce;
      } else if (ball.y + ball.size / 2 > this.c.canvas.height) {
        ball.y = this.c.canvas.height - ball.size / 2;
        ball.yvel *= -bounce;
      }

      var angle = Math.atan2(this.mouse.y - ball.y, this.mouse.x - ball.x);
      var distance =
        GageLib.math.getDistance(ball.x, ball.y, this.mouse.x, this.mouse.y) /
        2;
      var force = mouseForce / (distance * 0.1);
      ball.xvel += Math.cos(angle + Math.PI) * force;
      ball.yvel += Math.sin(angle + Math.PI) * force;
      ball.xvel *= friction;
      ball.yvel *= friction;
    }
    window.requestAnimationFrame(this.update.bind(this));
  }

  generateBalls() {
    var count = amount;
    for (var i = 0; i < count; i++) {
      this.balls.push({
        x: this.container.width() / 2,
        y: this.container.height() / 2,
        size: GageLib.math.getRandom(size[0], size[1]),
        xvel: GageLib.math.getRandom(launchSpeed[0], launchSpeed[1]),
        yvel: GageLib.math.getRandom(launchSpeed[0], launchSpeed[1])
      });
    }
  }

  trackMouse(e) {
    this.mouse.x = e.pageX;
    this.mouse.y = e.pageY;
  }
}