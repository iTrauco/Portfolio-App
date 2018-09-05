import React, { Component } from 'react';
import '../styles/components/link-menu.css';

class LinkMenu extends Component {
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
          <a href="https://github.com/quangogage" target="_blank">
            <i className="fab fa-github" />
          </a>

          {/* Stack Overflow */}
          <a
            href="https://stackoverflow.com/users/8322279/gage-hendy-ya-boy?tab=profile"
            target="_blank"
          >
            <i className="fab fa-stack-overflow" />
          </a>

          {/* Codepen */}
          <a href="https://codepen.io/quangogage/" target="_blank">
            <i className="fab fa-codepen" />
          </a>
        </div>
      </div>
    );
  }
}

export default LinkMenu;
