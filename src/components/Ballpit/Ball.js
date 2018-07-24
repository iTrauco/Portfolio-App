import GageLib from 'gages-library';
import $ from 'jquery';

export default class Ball {
  constructor(options) {
    // Store values
    this.ballSize = options.ballSize;
    this.friction = options.friction;
    this.container = options.container;
    this.mouseForce = options.mouseForce;

    // Movement
    this.xvel = 0;
    this.yvel = 0;

    // Create the element
    this.createElement();
  }

  /* ** Public Functions ** */
  update(mouse) {
    this.physics();
    this.boundary();
    this.push(mouse);
    this.applyStyles();
  }

  /* ** Private Functions ** */

  // Stayin in bounds
  boundary() {
    var pxSize = this.getPxSize();

    if (this.x - pxSize / 2 < 0) {
      this.x = pxSize / 2;
      this.xvel *= -1;
    } else if (this.x + pxSize / 2 > this.container.width()) {
      this.x = this.container.width() - pxSize / 2;
      this.xvel *= -1;
    }
    if (this.y + pxSize / 2 > this.container.height()) {
      this.y = this.container.height() - pxSize / 2;
      this.yvel *= -1;
    } else if (this.y - pxSize / 2 < 0) {
      this.y = pxSize / 2;
      this.yvel *= -1;
    }
  }

  // Basic physics
  physics() {
    this.x += this.xvel;
    this.y += this.yvel;
    this.xvel *= this.friction;
    this.yvel *= this.friction;
  }

  // Apply values calculated to the elements styles
  applyStyles() {
    this.el.css({
      left: this.x,
      top: this.y
    });
  }

  // Get pushed by the mouse
  push(mouse) {
    var angle = Math.atan2(mouse.y - this.y, mouse.x - this.x);
    var distance = GageLib.math.getDistance(this.x, this.y, mouse.x, mouse.y);
    var force = this.mouseForce / distance;
    this.xvel += Math.cos(angle + Math.PI) * force;
    this.yvel += Math.sin(angle + Math.PI) * force;
  }

  // Return the size of the ball in pixels
  getPxSize() {
    return (this.size / 100) * window.innerWidth;
  }

  // Creating the element
  createElement() {
    // The markup
    this.el = $("<div class='ball'></div>");

    // Calculate random values
    this.x = GageLib.math.getRandom(0, this.container.width());
    this.y = GageLib.math.getRandom(0, this.container.height());
    this.size = GageLib.math.getRandom(this.ballSize[0], this.ballSize[1]);

    // Apply to element
    this.el.css({
      left: this.x,
      top: this.y,
      width: this.size + 'vw',
      height: this.size + 'vw'
    });

    // Injection
    this.container.append(this.el);
  }
}
