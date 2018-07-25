import React, { Component } from 'react';
import '../../styles/pages/home/my-work.css';

import projectList from '../Projects/Projects';

class MyWork extends Component {
  render() {
    return (
      <div className="MyWork">
        {/* The title of the section */}
        <div className="title-container">
          <div className="title">What I've Worked on</div>
        </div>

        {/* The list of all projects */}
        <div className="project-container">
          {projectList.map((project, index) => (
            <div className="project">
              {project.title()}
              {project.body()}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MyWork;
