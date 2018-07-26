import React, { Component } from 'react';
import '../../styles/pages/home/my-work.css';

export default class MyWork extends Component {
  constructor(options) {
    super(options);
  }

  render() {
    return (
      <div className="MyWork">
        {/* Design Philosophy */}
        <div className="section">
          <div className="section-title">Design Philosophy</div>
          <div className="section-sub-text">
            I practice a minimal, precise design philosophy. I believe focused
            efforts on the fewest, most vital elements undoubtedly reaps better
            results. The best user-experiences provide a smooth, coherent
            use-path centered around the users direct interaction, never
            replacing utility with appearance.
          </div>
        </div>
      </div>
    );
  }
}
