import React, { Component } from 'react';
import MyWork from './MyWork';
import MyTech from './MyTech';
import MyServices from './MyServices';

class HomeBody extends Component {
  constructor(options) {
    super(options);
  }
  render() {
    return (
      <div className="HomeBody">
        {/*<MyServices scrollY={this.props.scrollY} />*/}
        <MyWork scrollY={this.props.scrollY} />
        <MyTech scrollY={this.props.scrollY} />
      </div>
    );
  }
}

export default HomeBody;
