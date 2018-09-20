import React, { Component } from 'react';
import TypeEffect from '../../components/TypeEffect';
import '../../styles/pages/home/home.css';
import HomeHeader from './HomeHeader';
import HomeBody from './HomeBody';
import HomeFooter from './HomeFooter.js';
import $ from 'jquery';
import LinkMenu from '../../components/LinkMenu';
import Message from '../../components/Message';
import ContactForm from '../../components/ContactForm';

class Home extends Component {
  constructor(options) {
    super(options);
    this.state = {
      introComplete: false,
      scrollY: 0
    };

    // Check If you should show the typingintro
    // animation on load
    this.checkTypeShow();

    // Tracking the user's scroll position
    $(window).on('scroll', this.trackScroll.bind(this));

    // References to the message & contact-form components
    this.message = React.createRef();
    this.contactForm = React.createRef();
  }

  // The markup
  render() {
    return (
      <div className="Home">
        <TypeEffect
          complete={this.completeTypeEffect.bind(this)}
          shouldShow={!this.state.showPage}
        />
        {this.state.showPage && (
          <div>
            <LinkMenu openContactForm={this.openContactForm.bind(this)} />
            <ContactForm ref={this.contactForm} socket={this.props.socket} />
            <Message ref={this.message} />
            <HomeHeader isShown={this.state.showPage} />
            <HomeBody
              scrollY={this.state.scrollY}
              triggerMessage={this.triggerMessage.bind(this)}
              openContactForm={this.openContactForm.bind(this)}
              isTouchDevice={this.props.isTouchDevice}
            />
            <HomeFooter />
          </div>
        )}
      </div>
    );
  }

  // Trigger the message component
  triggerMessage() {
    this.message.current.trigger();
  }

  // Opening the contact form
  openContactForm() {
    this.contactForm.current.open();
  }

  // Trigger the completion of the intro typing effect
  completeTypeEffect() {
    // Change the state.
    this.setState({ introComplete: true, showPage: true });

    // Fade in
    $('.Home').addClass('anim');

    // Remember this user has visited before
    localStorage.setItem('hasVisited', 'true');
  }

  // Check if the typing intro should be shown or not
  checkTypeShow() {
    if (
      localStorage.getItem('hasVisited') == 'true' ||
      this.state.introComplete
    ) {
      // Display the page
      this.state.showPage = true;

      // Fade in
      $('.Home').addClass('anim');
    } else {
      // Don't display the page
      this.state.showPage = false;
    }
  }

  // Track the users y-scroll position
  trackScroll() {
    this.setState({ scrollY: $(window).scrollTop() });
  }
}

export default Home;
