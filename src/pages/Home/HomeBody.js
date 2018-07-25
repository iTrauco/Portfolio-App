import React, { Component } from 'react';
import AboutMe from './AboutMe';
import MyWork from './MyWork';

class HomeBody extends Component {
  constructor(options) {
    super(options);
  }
  render() {
    return (
      <div className="HomeBody">
        <AboutMe scrollY={this.props.scrollY} />
        <MyWork scrollY={this.props.scrollY} />
      </div>
    );
  }
}

export default HomeBody;
