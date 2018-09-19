import React, { Component } from 'react';
import $ from 'jquery';
import '../styles/components/contact-form.css';

class ContactForm extends Component {
  constructor(options) {
    super(options);

    this.state = {
      email: '',
      message: '',
      sentMessage: false
    };
  }
  render() {
    return (
      <div className="ContactForm">
        <div className="window">
          <div className="click-to-close" onClick={this.close.bind(this)} />

          <div
            className={'form-state' + (this.state.sentMessage ? ' hidden' : '')}
          >
            <div className="title">Contact Me:</div>

            <input
              type="text"
              id="contact-email"
              placeholder="Your Email Address."
              onChange={this.onEmailChange.bind(this)}
              value={this.state.email}
            />

            <textarea
              id="contact-message"
              placeholder="Say hi!"
              onChange={this.onMessageChange.bind(this)}
              value={this.state.message}
            />

            <div className="button" onClick={this.tryToSend.bind(this)}>
              Send
            </div>
          </div>

          <div
            className={
              'complete-state' + (this.state.sentMessage ? '' : ' hidden')
            }
          >
            <div className="title complete">Message sent!</div>
            <div className="button" onClick={this.close.bind(this)}>
              Close Window
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Opening the modal
  open() {
    $('.ContactForm').addClass('open');
    $('body').css('overflow-y', 'hidden');
  }

  // Closing the modal
  close() {
    $('.ContactForm').removeClass('open');
    $('body').css('overflow-y', 'auto');
    this.setState({ sentMessage: false });
  }

  // Make sure everything checks out before sending the
  // email
  tryToSend() {
    var emailIsValid;
    var messageIsValid;

    // Check if the email is valid
    if (!this.validateEmail(this.state.email)) {
      emailIsValid = false;
      $('#contact-email').addClass('error');
    }

    // Check if the message is valid
    if (!this.validateMessage(this.state.message)) {
      messageIsValid = false;
      $('#contact-message').addClass('error');
    }

    // If everything checks out, send that ish!
    if (emailIsValid != false && messageIsValid != false) {
      this.sendMessage();

      this.setState({
        email: '',
        message: '',
        sentMessage: true
      });
    }
  }

  // Actually send the message to the API (then to my email:)
  sendMessage() {
    // Send to api
    this.props.socket.emit('email', {
      email: this.state.email,
      message: this.state.message
    });
  }

  // Handling email text input
  onEmailChange(e) {
    // Store the new value
    this.setState({ email: e.target.value });

    // Remove any errors if the email is now valid
    if (this.validateEmail(e.target.value)) {
      $('#contact-email').removeClass('error');
    }
  }

  // Handling message text input
  onMessageChange(e) {
    // Store the new value
    this.setState({ message: e.target.value });

    // Remove any errors if the message is now valid
    if (this.validateMessage(e.target.value)) {
      $('#contact-message').removeClass('error');
    }
  }

  // Validate the email address
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  // Validate the message
  validateMessage(message) {
    if (message.length >= 1) {
      return true;
    } else {
      return false;
    }
  }
}

export default ContactForm;
