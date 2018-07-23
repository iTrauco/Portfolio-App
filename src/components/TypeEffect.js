import React, { Component } from 'react';
import '../styles/components/type-effect.css';
import GageLib from 'gages-library';
import $ from 'jquery';

// Adjustable Variables
var delays = {
  writing: [1, 5], // How quickly you type each letter (milliseconds);
  waiting: [200, 200], // How long each dialog should wait when typing is complete
  deleting: [0.5, 1.5]
};

class TypeEffect extends Component {
  constructor(options) {
    super(options);

    // Initiate the dialog
    $(document).ready(this.startDialog.bind(this));
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
          this.direction = 'waiting';
          this.resetTimer();
        }
      }

      // Waiting after it's typed out
    } else if (this.direction === 'waiting') {
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
          this.nextDialog();
        }
      }
    }

    window.requestAnimationFrame(this.updateDialog.bind(this));
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
  nextDialog() {
    if (this.currentDialog < dialogs.length - 1) {
      this.currentDialog++;
      this.direction = 'writing';
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
