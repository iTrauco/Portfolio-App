import React, { Component } from 'react';
import '../styles/components/project.css';

class Project extends Component {
  constructor(options) {
    super(options);
    this.state = {
      images: []
    };
  }
  componentDidMount() {
    // Load the images
    this.loadImages();
  }

  render() {
    return (
      <div className="Project">
        {/* The Text */}
        <div className="text-container">
          <div className="name">{this.props.name}</div>
          <div className="description">{this.props.description}</div>
        </div>
        <div className="line" />

        {/* The Images */}
        <div className="image-container">
          {this.state.images.map((image, key) => {
            return <img src={image} />;
          })}
        </div>
      </div>
    );
  }

  /* ** Private Functions ** */
  loadImages() {
    var images = [];

    // Loop through all paths that have been
    // passed down
    for (var i = 0; i < this.props.images.length; i++) {
      var path = this.props.images[i];

      images.push(require('../assets/images/projects' + path));
    }

    // Store them in the state.
    this.setState({
      images: images
    });
  }
}

export default Project;
