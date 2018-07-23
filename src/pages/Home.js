import React, { Component } from 'react';
import TypeEffect from '../components/TypeEffect';
import '../styles/home.css';

class Home extends Component {
  constructor(options) {
    super(options);
    this.state = {
      introComplete: false
    };
  }

  // The markup
  render() {
    return (
      <div className="Home">
        <TypeEffect complete={this.completeTypeEffect.bind(this)} />
      </div>
    );
  }

  // Trigger the completion of the intro typing effect
  completeTypeEffect() {
    this.setState({ introComplete: true });
  }
}

export default Home;
