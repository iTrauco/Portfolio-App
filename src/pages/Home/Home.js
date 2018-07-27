import React, { Component } from 'react';
import TypeEffect from '../../components/TypeEffect';
import '../../styles/pages/home/home.css';
import HomeHeader from './HomeHeader';
import HomeBody from './HomeBody';
import $ from 'jquery';

class Home extends Component {
  constructor(options) {
    super(options);
    this.state = {
      introComplete: false,
      scrollY: 0
    };
    this.checkTypeShow();
  }

  componentDidMount() {
    this.handleScrollables();
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
            <HomeHeader isShown={this.state.showPage} />
            <HomeBody />
          </div>
        )}
      </div>
    );
  }

  // Trigger the completion of the intro typing effect
  completeTypeEffect() {
    // Change the state.
    this.setState({ introComplete: true, showPage: true });

    // Fade in
    $('.Home').addClass('anim');

    // Remember this user has visited before
    localStorage.setItem('hasVisited', 'true');

    // Now that the rest of the page is rendered,
    // retrack the scrollable animations
    this.handleScrollables();
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
  // Adding the anim class to elements that have been scrolled over
  handleScrollables() {
    var els = $('.anim-on-scroll');

    // Store all
    this.scrollElements = [];
    for (var i = 0; i < els.length; i++) {
      var el = els.eq(i);

      this.scrollElements.push({ el: el, y: el.offset().top });
    }

    console.log(this.scrollElements);
    // Check if the user has scroled over it every time the users scroll position changes
    $(window).on(
      'scroll',
      function(e) {
        for (var i = 0; i < this.scrollElements.length; i++) {
          var scrollElement = this.scrollElements[i];
          var scrollY = $(window).scrollTop();
          if (scrollY + window.innerHeight >= scrollElement.y) {
            scrollElement.el.addClass('anim');
          }
        }
      }.bind(this)
    );
  }
}

export default Home;
