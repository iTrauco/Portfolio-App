import React, { Component } from 'react';
import '../styles/components/type-effect.css';
import GageLib from 'gages-library';
import $ from 'jquery';

// Adjustable Variables
var delays = {
  writing: [1, 3], // How quickly you type each letter (milliseconds);
  typedWaiting: [75, 75], // How long each dialog should wait when typing is complete
  deletedWaiting: [25, 25], // How long each dialog should wait when all letters are deleted
  deleting: [0.5, 3]
};

/* Speedy - For development
delays = {
  writing: [0.1, 0.1], // How quickly you type each letter (milliseconds);
  typedWaiting: [0.1, 0.1], // How long each dialog should wait when typing is complete
  deletedWaiting: [0.1, 0.1], // How long each dialog should wait when all letters are deleted
  deleting: [0.1, 0.1]
};
*/

class TypeEffect extends Component {
  constructor(options) {
    super(options);
    this.state = { isComplete: false };
  }
  // Start the dialog
  componentDidMount() {
    if (this.props.shouldShow) {
      this.startDialog();
    } else {
      $('.TypeEffect').remove();
    }
  }

  // Rendering the markup
  render() {
    return (
      <div className="TypeEffect">
        <div className="dialog-text" />
      </div>
    );
  }

  // Starting the dialog
  startDialog() {
    // Store some element references for easy use
    this.text = $('.dialog-text');
    this.el = $('.TypeEffect');

    // Set up the first incoming text
    this.currentDialog = 0;
    this.currentLetter = 0;
    this.totalLetters = dialogs[this.currentDialog].length;
    this.direction = 'writing';

    // Setup the timer
    this.resetTimer();

    this.updateDialog();
  }

  // Updating the dialog typing effect
  updateDialog() {
    if (!this.state.isComplete) {
      // Run the timer
      this.timer++;

      // Typing it out
      if (this.direction === 'writing') {
        var dialogLength = dialogs[this.currentDialog].length;

        if (this.timer >= this.delay) {
          if (this.currentLetter < dialogLength) {
            // Typing more letters
            this.addLetter();
            this.resetTimer();
          } else {
            // Finishing the dialog
            this.direction = 'typedWaiting';
            this.resetTimer();
          }
        }

        // Waiting after it's typed out
      } else if (this.direction === 'typedWaiting') {
        if (this.timer >= this.delay) {
          this.direction = 'deleting';
        }

        // Deleting it
      } else if (this.direction === 'deleting') {
        if (this.timer >= this.delay) {
          if (this.currentLetter > 0) {
            this.removeLetter();
            this.resetTimer();
          } else {
            this.direction = 'deletedWaiting';
            this.resetTimer();
          }
        }

        // When it's done being deleted
      } else if (this.direction == 'deletedWaiting') {
        if (this.timer >= this.delay) {
          this.setupNextDialog();
        }
      }

      this.updateLoop = window.requestAnimationFrame(
        this.updateDialog.bind(this)
      );
    } else {
      window.cancelAnimationFrame(this.updateLoop);
    }
  }

  // Add a letter
  addLetter() {
    var currentHTML = this.text.html();
    var newLetter = dialogs[this.currentDialog][this.currentLetter];
    this.text.html(currentHTML + newLetter);
    this.currentLetter++;
  }

  // Removing a letter
  removeLetter() {
    var currentHTML = this.text.html();
    this.text.html(currentHTML.substring(0, currentHTML.length - 1));
    this.currentLetter--;
  }

  // Resetting the timer to zero
  resetTimer() {
    var delay = delays[this.direction];
    this.timer = 0;
    this.delay = GageLib.math.getRandom(delay[0], delay[1]);
  }

  // Going to the next dialog
  setupNextDialog() {
    if (this.currentDialog < dialogs.length - 1) {
      this.currentDialog++;
      this.direction = 'writing';
    } else {
      this.el.addClass('complete');
      this.props.complete();
      this.setState({ isComplete: true });
    }
  }
}

// The displayed phrases
var dialogs = [
  'Welcome to my website.',
  'Why are you here?',
  'Well, feel free to look around...'
];

export default TypeEffect;
