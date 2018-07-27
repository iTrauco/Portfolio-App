import React, { Component } from 'react';
import MyWork from './MyWork';
import MyTech from './MyTech';

class HomeBody extends Component {
  constructor(options) {
    super(options);
  }
  render() {
    return (
      <div className="HomeBody">
        <MyWork />
        <MyTech />
      </div>
    );
  }
}

export default HomeBody;
