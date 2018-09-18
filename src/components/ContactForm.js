import React, { Component } from 'react';
import $ from 'jquery';
import '../styles/components/contact-form.css';

var clientId =
  '154297183854-1kdblgdhdng42fpgdddlbf8463bp03g0.apps.googleusercontent.com';
var clientSecret = 'axbaIe__gwNnZpwi0cvyP9Ix';
var apiKey = 'AIzaSyD5yw1kMHQDsIEO0Vewjz8hm_FCi77-95I';

class ContactForm extends Component {
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

          <div className="button">Send</div>
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
}

export default ContactForm;
