import React, { Component } from 'react';
import Project from '../../components/Project';
import ribbon from '../../assets/images/ribbon.png';
import '../../styles/pages/home/my-work.css';
import $ from 'jquery';

// The MyWork Blade Component
class MyWork extends Component {
  componentDidMount() {
    // Anim on scroll
    var els = $('.MyWork .anim-on-scroll');
    this.scrollableElements = [];
    for (var i = 0; i < els.length; i++) {
      var el = els.eq(i);

      this.scrollableElements.push({
        el: el,
        y: el.offset().top + el.height() * 0.5
      });
    }
  }
  componentWillReceiveProps(newProps) {
    this.checkScroll(newProps.scrollY);
  }
  checkScroll(scrollY) {
    for (var i = 0; i < this.scrollableElements.length; i++) {
      var scrollable = this.scrollableElements[i];
      if (scrollY + window.innerHeight * 0.7 >= scrollable.y) {
        scrollable.el.addClass('anim');
      }
    }
  }

  render() {
    return (
      <div className="MyWork">
        <div className="content">
          <div className="title anim-on-scroll">
            <img className="title-ribbon" src={ribbon} alt="" />
            <div className="text">My Work:</div>
          </div>
          <div className="project-container">
            {projects.map((project, index) => {
              return (
                <Project
                  key={index}
                  index={index}
                  name={project.name}
                  link={project.link}
                  description={project.description}
                  images={project.images}
                  scrollY={this.props.scrollY}
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
    name: 'Gatorstep',
    link: 'http://gatorstep.quangostaging.com/configurator/',
    description: `
      Gatorstep is a quality flooring manufacturer. I was tasked with creating a 
      3d product viewer, allowing users to see the different color combinations,
      patterns, textures - All on a 3d boat model.
    
      <br /><br />

      This was my first time working with <a href="https://threejs.org/">ThreeJS</a>,
      and 3d-models on-the-web. Needless to say, it was a very educational experience.

      <br /><br />

      The biggest hurdle in this project was definitely prepping the 3d-models in a
      way that would work well with ThreeJS. There was a lot of trial and error,
      testing, and breaking everything - But eventually I found a reliable pipeline.
      
    `,
    images: ['/gatorstep/1.png']
  },
  {
    name: 'Canby Ed Foundation',
    link: 'https://canbyedfoundation.org/',
    description: `
      The Canby Educational Foundation is an organization that supplies
      grants to local schools. Their previous website was built with React,
      using a custom-made CMS, everything worked fine but it wasn't quite
      as flexible as they wanted - So I was tasked with recreating the site
      from scratch in Wordpress.
      
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
  },
  {
    name: 'My Portfolio',
    link: 'https://github.com/quangogage/Portfolio-App',
    description: `
      Yes! I am talking about this site. Working on it has been a ton of fun
      and I've learned a lot. Most of my time working on this site has been
      spent designing and making sure everything feels right.

      <br /><br />

      This site is a React app - I decided to use React because I knew I wanted
      it to have that single-page-application feel - And it is a technology that
      I am constantly trying to improve with.

      <br /><br />
      
      Overall the biggest takeaway from my time spent working on this site has to be
      my newfound backend knowledge. I set up this static site to be served with
      NGINX, and the API used to send emails from the contact form is being ran by
      Docker.
    `,
    images: ['/portfolio/1.png']
  }
];

export default MyWork;
