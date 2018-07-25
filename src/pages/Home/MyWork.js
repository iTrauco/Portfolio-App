import React, { Component } from 'react';
import '../../styles/pages/home/my-work.css';

import projectList from '../Projects/Projects';

class MyWork extends Component {
  render() {
    return (
      <div className="MyWork">
        {/* The title of the section */}
        <div className="title">My Work</div>

        {/* The list of all projects */}
        <div className="project-container">
          {projectList.map((project, index) => (
            <div className="project" key={index}>
              <div className="side left">{project.thumbnail()}</div>
              <div className="divider" />
              <div className="side right">
                {project.title()}
                {project.description()}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MyWork;
