import '../../styles/components/clouds.css';
import $ from 'jquery';
import Bubble from './Bubble';

var bubbleCount = 6;

export default class Clouds {
  constructor(options) {
    // Store values
    this.parentEl = options.el;

    // Create the element to contain the clouds
    this.createElement();

    // All of the bubbles
    this.bubbles = [];
    this.generateBubbles();

    // Update the bubbles
    this.update();
  }

  // Create the Element
  createElement() {
    this.el = $('<div class="clouds"></div>');
    this.parentEl.append(this.el);
  }

  // Create the bubbles
  generateBubbles() {
    for (var i = 0; i < bubbleCount; i++) {
      this.bubbles.push(
        new Bubble({
          container: this.el
        })
      );
    }
  }

  // Update the bubbles
  update() {
    for (var i = 0; i < this.bubbles.length; i++) {
      var bubble = this.bubbles[i];
      bubble.update();
    }
    window.requestAnimationFrame(this.update.bind(this));
  }
}
