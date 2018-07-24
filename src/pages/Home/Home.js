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
      // Display the page
      showPage = true;
    } else {
      // Don't display the page
      showPage = false;
    }

    return (
      <div className="Home">
        <TypeEffect
          complete={this.completeTypeEffect.bind(this)}
          shouldShow={!showPage}
        />
        {showPage && (
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
