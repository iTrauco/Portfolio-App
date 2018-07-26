import $ from 'jquery';

var gridSize = 50;

export default class CanvasWavy {
  constructor(options) {
    this.canvas = options.canvas[0];
    this.c = this.canvas.getContext('2d');

    this.c.canvas.width = options.width;
    this.c.canvas.height = options.height;
    this.width = this.c.canvas.width;
    this.height = this.c.canvas.height;

    this.anim = {
      timer: 0,
      speed: 10,
      intensity: 1,
      waveLength: 2
    };

    this.generateSpots();

    this.update();
  }

  // Updating everything
  update() {
    // Animation variables
    this.anim.timer += this.anim.speed;

    // The spots
    for (var i = 0; i < this.spots.length; i++) {
      var spot = this.spots[i];

      var timer = this.anim.timer - (spot.x + spot.y) / this.anim.waveLength;

      // Calculate how high the spot should be raised
      spot.raise = 0.5 - Math.sin(timer / 100) * this.anim.intensity;

      // Draw it
      this.drawSpot(spot);
    }
    window.requestAnimationFrame(this.update.bind(this));
  }

  // Create the spots
  generateSpots() {
    var gridWidth = this.width / gridSize;
    var gridHeight = this.height / gridSize;

    // Contain the spot objects
    this.spots = [];

    for (var column = 1; column < gridWidth; column++) {
      for (var row = 1; row < gridHeight; row++) {
        this.spots.push({
          x: column * gridSize,
          y: row * gridSize
        });
      }
    }
  }

  // Drawing individual spots
  drawSpot(spot) {
    this.c.globalCompositeOperation = 'source-over';
    this.c.fillStyle = '#DD6853';
    this.c.beginPath();
    this.c.arc(spot.x, spot.y, gridSize / 2, 0, 2 * Math.PI, false);
    this.c.fill();

    this.c.globalCompositeOperation = 'destination-out';
    this.c.beginPath();
    this.c.arc(
      spot.x + (gridSize / 4) * spot.raise,
      spot.y,
      gridSize * 0.55,
      0,
      2 * Math.PI,
      false
    );
    this.c.fill();
  }
}
