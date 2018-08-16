import GageLib from '../gages-library/gagelib';
import $ from 'jquery';

var count = 300;
var size = [2, 5];
var fallSpeed = [0.0005, 0.0002];

export default class CanvasWavy {
  constructor(options) {
    this.canvas = options.canvas;
    this.canvasEl = this.canvas[0];
    this.c = this.canvasEl.getContext('2d');

    this.c.canvas.width = options.width;
    this.c.canvas.height = options.height;
    this.width = this.c.canvas.width;
    this.height = this.c.canvas.height;

    $(window).on('mousemove', this.trackMouse.bind(this));

    this.generateDrops();

    this.update();
  }

  // Updating everything
  update() {
    // The drops
    for (var i = 0; i < this.drops.length; i++) {
      var drop = this.drops[i];

      // Move the ball down
      drop.moveStutter.timer += drop.moveStutter.speed;
      drop.speed = Math.abs(
        drop.originalSpeed +
          Math.sin(drop.moveStutter.timer) * drop.moveStutter.intensity
      );
      drop.y += drop.speed;

      // Change the size to make it look more natural
      drop.sizeAnim.timer += drop.speed / 100;
      drop.size = Math.abs(
        drop.originalSize + Math.sin(drop.sizeAnim.timer) * 1.5
      );

      // PUshing back
      if (this.mouse) {
        var angle =
          Math.atan2(this.mouse.y - drop.y, this.mouse.x - drop.x) + Math.PI;
        var mouseSize = 100;
        var distance = GageLib.math.getDistance(
          drop.x,
          drop.y,
          this.mouse.x,
          this.mouse.y
        );

        if (distance < mouseSize / 2) {
          var force = mouseSize / 2 / distance;
          drop.x += Math.cos(angle) * force;
          drop.y += Math.sin(angle) * force;
        }
      }

      // Draw the drop
      this.drawDrop(drop);
    }
    window.requestAnimationFrame(this.update.bind(this));
  }

  // Create the drops
  generateDrops() {
    this.drops = [];

    for (var i = 0; i < count; i++) {
      var dropSize = GageLib.math.getRandom(size[0], size[1]);
      var dropSpeed =
        GageLib.math.getRandom(fallSpeed[0] * 10000, fallSpeed[1] * 10000) /
        10000;

      this.drops.push({
        x: GageLib.math.getRandom(0, this.width),
        y: -dropSize / 2,
        speed: dropSpeed,
        originalSpeed: dropSpeed,
        size: dropSize,
        originalSize: dropSize,
        sizeAnim: {
          timer: GageLib.math.getRandom(0, 100)
        },
        moveStutter: {
          timer: GageLib.math.getRandom(0, 100),
          speed: GageLib.math.getRandom(0.001 * 100000, 0.01 * 100000) / 100000,
          intensity: GageLib.math.getRandom(0.1 * 100, 0.4 * 100) / 100
        }
      });
    }
  }

  // Drawing individual drops
  drawDrop(drop) {
    this.c.fillStyle = '#f47761';
    this.c.beginPath();
    this.c.arc(drop.x, drop.y, drop.size, 0, 2 * Math.PI, false);
    this.c.fill();
  }

  trackMouse(e) {
    this.mouse = {
      x: e.pageX,
      y: e.pageY - this.canvas.offset().top
    };
  }
}
