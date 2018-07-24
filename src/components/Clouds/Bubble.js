import $ from 'jquery';
import GageLib from 'gages-library';

/**
 * The bubbles have two movement states:
 *
 * Flying, or not flying (which is null)
 *
 * The flying bubbles fly away from the container,
 * The not flying bubbles kinda just hang around
 * look floaty.
 *
 */

// Adjusable variables
var size = [90, 100]; // %;
var notFlyingSpeed = [50, 55];
var notFlyingRotationSpeed = 0.005;

export default class Bubble {
  constructor(options) {
    // Store values
    this.container = options.container;
    this.moveType = options.moveType;

    // Create the element
    this.createElement();

    // Not flying animation variables
    this.anim = {
      timer: GageLib.math.getRandom(0, 1000),
      dir: GageLib.math.getRandom(0, Math.PI * 10),
      speed: GageLib.math.getRandom(notFlyingSpeed[0], notFlyingSpeed[1])
    };
  }

  /* ** Public Functions ** */
  update() {
    // Not flying
    if (this.moveType !== 'flying') {
      var baseX = this.container.width() / 2;
      var baseY = this.container.height() / 2;

      // Run the timer
      this.anim.timer++;

      // Move the bubble in a sinewave
      this.x =
        baseX +
        Math.cos(this.anim.dir) *
          Math.sin(this.anim.timer / 15) *
          this.anim.speed;
      this.y =
        baseY +
        Math.sin(this.anim.dir) *
          Math.sin(this.anim.timer / 15) *
          this.anim.speed;

      this.anim.dir += notFlyingRotationSpeed;
    }

    // Apply the styles
    this.el.css({
      left: this.x,
      top: this.y
    });
  }

  /* ** Private Functions ** */
  // Creating the element
  createElement() {
    // The markup
    this.el = $("<div class='bubble'></div>");

    // Generate values
    this.x = GageLib.math.getRandom(
      this.container.width() * 0.4,
      this.container.width() * 0.5
    );
    this.y = GageLib.math.getRandom(
      this.container.height() * 0.4,
      this.container.height() * 0.5
    );
    this.size = GageLib.math.getRandom(size[0], size[1]);

    // Styles
    this.el.css({
      left: this.x,
      top: this.y,
      width: this.size + '%',
      height: this.size + '%'
    });

    // Injection
    this.container.append(this.el);
  }
}
