import React, { Component } from 'react';
import '../../styles/pages/home/home-footer.css';

class HomeFooter extends Component {
  render() {
    return (
      <div className="HomeFooter">
        <div className="content">
          <div className="text-container">
            <div>Website Created by Gage Henderson</div>
            <div>gageprod@gmail.com</div>
          </div>
          <div className="line" />
          <div className="link-container">
            {/* Github */}
            <a
              className="link"
              href="https://github.com/quangogage"
              target="_blank"
            >
              <i className="fab fa-github" />
            </a>

            {/* Stack Overflow */}
            <a
              className="link"
              href="https://stackoverflow.com/users/8322279/gage-hendy-ya-boy?tab=profile"
              target="_blank"
            >
              <i className="fab fa-stack-overflow" />
            </a>

            {/* Codepen */}
            <a
              className="link"
              href="https://codepen.io/quangogage/"
              target="_blank"
            >
              <i className="fab fa-codepen" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeFooter;
