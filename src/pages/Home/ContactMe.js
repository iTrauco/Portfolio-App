import React, { Component } from 'react';
import $ from 'jquery';
import '../../styles/pages/home/contact-me.css';

class ContactMe extends Component {
  render() {
    return (
      <div className="ContactMe">
        <div className="content">
          {/* The Copy */}
          <div className="title">Contact Me</div>
          <div className="line" />
          <div className="sub-text">
            Want to hire me? Need some contract work? Just want to chat? You can
            contact me via email, or the form linked below.
          </div>

          {/* CTA's */}
          <div className="contact-container">
            <div className="button-container">
              <div className="button">
                <i className="fas fa-pencil-alt" />
                Contact Me
              </div>
            </div>
            <div className="bar" />
            <div className="email" onClick={this.copyEmail.bind(this)}>
              gageprod@gmail.com
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Copy the email address to clipboard on click
  copyEmail() {
    // Select the email div's html
    $('.email').select();

    // Copy it to your clipboard
    document.execCommand('copy');

    // Let the user know!
    this.props.triggerMessage();
  }
}

export default ContactMe;
