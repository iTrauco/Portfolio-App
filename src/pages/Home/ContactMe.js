import React, { Component } from 'react';
import $ from 'jquery';
import '../../styles/pages/home/contact-me.css';
import Ballpit from '../../components/Ballpit';

class ContactMe extends Component {
  componentDidMount() {
    // Anim on scroll
    var els = $('.ContactMe .anim-on-scroll');
    this.scrollableElements = [];
    for (var i = 0; i < els.length; i++) {
      var el = els.eq(i);
      this.scrollableElements.push({
        el: el,
        y: el.offset().top + el.height()
      });
    }

    // Generate the ballpit
    this.ballPit = new Ballpit({
      canvas: $('#Ballpit'),
      width: $('.ContactMe').innerWidth(),
      height: $('.ContactMe').innerHeight()
    });
  }
  componentWillReceiveProps(newProps) {
    this.checkScroll(newProps.scrollY);
  }
  checkScroll(scrollY) {
    for (var i = 0; i < this.scrollableElements.length; i++) {
      var scrollable = this.scrollableElements[i];
      if (scrollY + window.innerHeight >= scrollable.y) {
        scrollable.el.addClass('anim');
      }
    }
  }

  render() {
    return (
      <div className="ContactMe">
        {/* The Canvas for the Ballpit */}
        <canvas id="Ballpit" />

        <div className="content">
          {/* The Copy */}
          <div className="title anim-on-scroll">Contact Me</div>
          <div className="line anim-on-scroll" />
          <div className="sub-text anim-on-scroll">
            Want to hire me? Need some contract work? Just want to chat? You can
            contact me via email, or the form linked below.
          </div>

          {/* CTA's */}
          <div className="contact-container anim-on-scroll">
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
