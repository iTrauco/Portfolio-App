import React, { Component } from 'react';
import MyWork from './MyWork';

class HomeBody extends Component {
  constructor(options) {
    super(options);
  }
  render() {
    return (
      <div className="HomeBody">
        <MyWork scrollY={this.props.scrollY} />
      </div>
    );
  }
}

export default HomeBody;
