import React, { Component } from 'react';
import $ from 'jquery';
import '../styles/components/contact-form.css';

class ContactForm extends Component {
  render() {
    return (
      <div className="ContactForm">
        <div className="window">
          <div className="title">Contact Me:</div>

          <input
            type="text"
            id="contact-email"
            placeholder="Your Email Address."
          />

          <textarea id="contact-message" placeholder="Say hi!" />

          <div className="button">Send</div>
        </div>
      </div>
    );
  }

  open() {
    $('.ContactForm').addClass('open');
  }
}

export default ContactForm;
