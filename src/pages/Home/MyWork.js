import React, { Component } from 'react';
import Project from '../../components/Project';
import '../../styles/pages/home/my-work.css';

// The MyWork Blade Component
class MyWork extends Component {
  render() {
    return (
      <div className="MyWork">
        <div className="content">
          <div className="title">My Work:</div>
          <div className="project-container">
            {projects.map((project, index) => {
              return (
                <Project
                  key={index}
                  index={index}
                  name={project.name}
                  description={project.description}
                  images={project.images}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

/**
 * All of the projects listed in the MyWork blade.
 *
 * Quick notes:
 *  - In the images array, the filepaths should be
 *    relative to the `src/assets` directory.
 *
 */
var projects = [
  {
    name: 'Canby Ed Foundation',
    description: `
      The Canby Educational Foundation is an organization that supplies
      grants to local schools. Their previous website was built with React,
      using a custom-made CMS, everything worked fine but it wasn't quite
      as flexible as they wanted - So I was tasked with recreating the site
      from scratch in wordpress.
      
      <br /><br />

      This project was a lot of fun. I used the
      <a href="https://www.advancedcustomfields.com/" target="_blank">
      Advanced Custom Fields</a> plugin which allowed me to easily make nearly 
      any element on the site customizable for the client. There is also a 
      <a href="https://canbyedfoundation.org/grant-form/">grant application
      form</a> on the site. Which, in making it, helped me learn a lot about
      Wordpress & SMTP.
    `,
    images: ['/canby-ed-foundation/1.png', '/canby-ed-foundation/2.png']
  }
];

export default MyWork;
