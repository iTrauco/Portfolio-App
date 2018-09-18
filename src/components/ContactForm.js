import React, { Component } from 'react';
import $ from 'jquery';
import '../styles/components/contact-form.css';

class ContactForm extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="ContactForm">
        <div className="window">
          <div className="click-to-close" onClick={this.close.bind(this)} />
          <div className="title">Contact Me:</div>

          <input
            type="text"
            id="contact-email"
            placeholder="Your Email Address."
          />

          <textarea id="contact-message" placeholder="Say hi!" />

          <div className="button" onClick={this.sendMessage.bind(this)}>
            Send
          </div>
        </div>
      </div>
    );
  }

  open() {
    $('.ContactForm').addClass('open');
    $('body').css('overflow-y', 'hidden');
  }

  close() {
    $('.ContactForm').removeClass('open');
    $('body').css('overflow-y', 'auto');
  }

  sendMessage() {
    this.props.socket.emit('email', { message: 'Hello friend!' });
  }
}

export default ContactForm;
