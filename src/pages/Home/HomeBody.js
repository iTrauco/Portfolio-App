import React, { Component } from 'react';
import MyWork from './MyWork';
import MyTech from './MyTech';
import MyServices from './MyServices';
import ContactMe from './ContactMe';

class HomeBody extends Component {
  render() {
    return (
      <div className="HomeBody">
        {/*<MyServices scrollY={this.props.scrollY} />*/}
        <MyWork scrollY={this.props.scrollY} />
        <MyTech scrollY={this.props.scrollY} />
        <ContactMe
          scrollY={this.props.scrollY}
          triggerMessage={this.props.triggerMessage}
          openContactForm={this.props.openContactForm}
        />
      </div>
    );
  }
}

export default HomeBody;
