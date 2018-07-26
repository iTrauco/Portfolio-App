import React, { Component } from 'react';
import '../../styles/pages/home/my-work.css';
import MtSvgLines from 'react-mt-svg-lines';

export default class MyWork extends Component {
  constructor(options) {
    super(options);
  }

  render() {
    return (
      <div className="MyWork">
        {/* Design Philosophy */}
        <div className="section">
          <div className="side left">
            <div className="section-title">Design Philosophy</div>
          </div>
          <div className="side right">
            <div className="section-sub-text">
              I practice a minimal, precise design philosophy. I believe focused
              efforts on the fewest, most vital elements undoubtedly reaps
              better results. The best user-experiences provide a smooth,
              coherent use-path centered around the users direct interaction,
              never replacing utility with appearance.
            </div>
          </div>
        </div>
        {/* Creative Crunches */}
        <div className="section">
          <div className="side left">
            <div className="section-title">Creative Crunches</div>
          </div>
          <div className="side right">
            <div className="section-sub-text">
              I like to view creativity as a muscle - You gotta work it out. The
              road to improvement is a road of constant challenge, you must face
              it head on, and boldly. I do so by maintaining a multitude of
              creative activities in my day to day life. When I'm not creating
              websites you can find me producing music in the studio (my room),
              or laying down vocal tracks in the booth (my closet).
            </div>
          </div>
        </div>
      </div>
    );
  }
}
