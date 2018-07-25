import React, { Component } from 'react';
import '../../styles/pages/home/my-work.css';

import projectList from '../Projects/Projects';

class MyWork extends Component {
  render() {
    return (
      <div className="MyWork">
        {/* The list of all projects */}
        <div className="project-container">
          {projectList.map((project, index) => (
            <div className="project" key={index}>
              {project.thumbnail()}
              <div className="overlay">
                <div className="text-container">
                  {project.title()}
                  {project.description()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MyWork;
