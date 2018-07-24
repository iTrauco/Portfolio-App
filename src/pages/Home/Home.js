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
    this.checkTypeShow();
  }

  // The markup
  render() {
    return (
      <div className="Home">
        <TypeEffect
          complete={this.completeTypeEffect.bind(this)}
          shouldShow={!this.state.showPage}
        />
        {this.state.showPage && (
          <div>
            <HomeHeader isShown={this.state.showPage} />
            <HomeBody />
          </div>
        )}
      </div>
    );
  }

  // Trigger the completion of the intro typing effect
  completeTypeEffect() {
    // Change the state.
    this.setState({ introComplete: true, showPage: true });

    // Remember this user has visited before
    localStorage.setItem('hasVisited', 'true');
  }

  // Check if the typing intro should be shown or not
  checkTypeShow() {
    if (
      localStorage.getItem('hasVisited') == 'true' ||
      this.state.introComplete
    ) {
      // Display the page
      this.state.showPage = true;
    } else {
      // Don't display the page
      this.state.showPage = false;
    }
  }
}

export default Home;
