import React, { Component } from 'react';
import $ from 'jquery';
import '../styles/components/message.css';

// How long should the message appear for?
var duration = 135;

class Message extends Component {
  constructor(options) {
    super(options);

    // Running the timer
    this.timer = 0;
    this.runTimer();

    // Binding public functions
    this.trigger = this.trigger.bind(this);
  }

  render() {
    return (
      <div className="Message hidden">
        <div className="text">
          "gageprod@gmail.com" was copied to your clipboard!
        </div>
      </div>
    );
  }

  // Triggering the message (make it appear)
  trigger() {
    // Reset the timer
    this.timer = duration;

    // Unhide it
    $('.Message').removeClass('hidden');
  }

  // Run the timer
  runTimer() {
    this.timer--;

    if (this.timer < 0 && !$('.Message').hasClass('hidden')) {
      $('.Message').addClass('hidden');
    }

    window.requestAnimationFrame(this.runTimer.bind(this));
  }
}

export default Message;
