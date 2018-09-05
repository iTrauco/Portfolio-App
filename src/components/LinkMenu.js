import React, { Component } from 'react';
import $ from 'jquery';
import '../styles/components/link-menu.css';

class LinkMenu extends Component {
  componentDidMount() {
    this.hoverLinks();
  }
  render() {
    return (
      <div className="LinkMenu">
        {/* The Contact Me Button */}
        <div className="contact">
          <i className="fas fa-edit" />
          <div className="text">Contact Me</div>
        </div>

        {/* Links to my different profiles */}
        <div className="link-container">
          {/* Github */}
          <a
            className="link"
            href="https://github.com/quangogage"
            target="_blank"
          >
            <i className="fab fa-github" />
            <div className="name">Github</div>
          </a>

          {/* Stack Overflow */}
          <a
            className="link"
            href="https://stackoverflow.com/users/8322279/gage-hendy-ya-boy?tab=profile"
            target="_blank"
          >
            <i className="fab fa-stack-overflow" />
            <div className="name">Stack Overflow</div>
          </a>

          {/* Codepen */}
          <a
            className="link"
            href="https://codepen.io/quangogage/"
            target="_blank"
          >
            <i className="fab fa-codepen" />
            <div className="name">Codepen</div>
          </a>
        </div>
      </div>
    );
  }

  // Hovering over the links
  hoverLinks() {
    var links = $('.LinkMenu .link');

    setTimeout(function() {
      // Remember each links original width)
      for (var i = 0; i < links.length; i++) {
        var link = links.eq(i);
        link.attr('data-namewidth', link.children('.name').outerWidth());
        link.children('.name').css('width', '0px');
      }
      $('.LinkMenu .link').on('mouseenter', function(e) {
        $(this)
          .children('.name')
          .css('width', $(this).attr('data-namewidth'));
      });
      $('.LinkMenu .link').on('mouseleave', function(e) {
        $(this)
          .children('.name')
          .css('width', 0);
      });
    }, 500);
  }
}

export default LinkMenu;
