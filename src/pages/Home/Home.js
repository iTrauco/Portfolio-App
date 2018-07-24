import React, { Component } from 'react';
import TypeEffect from '../../components/TypeEffect';
import '../../styles/pages/home/home.css';
import HomeHeader from './HomeHeader';
import HomeBody from './HomeBody';

class Home extends Component {
  constructor(options) {
    super(options);
    this.state = {
      introComplete: false
    };
  }

  // The markup
  render() {
    var typingIntro;
    var showPage;
    if (
      localStorage.getItem('hasVisited') == 'true' ||
      this.state.introComplete
    ) {
      // Don't display typing intro
      typingIntro = <div />;

      // Display the page
      showPage = true;
    } else {
      // Display the typing intro
      typingIntro = (
        <TypeEffect complete={this.completeTypeEffect.bind(this)} />
      );

      // Don't display the page
      showPage = false;
    }

    return (
      <div className="Home">
        {typingIntro}
        {this.state && (
          <div>
            <HomeHeader /> <HomeBody />
          </div>
        )}
      </div>
    );
  }

  // Trigger the completion of the intro typing effect
  completeTypeEffect() {
    // Change the state.
    this.setState({ introComplete: true });

    // Remember this user has visited before
    localStorage.setItem('hasVisited', 'true');
  }
}

export default Home;
