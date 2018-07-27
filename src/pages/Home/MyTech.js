import React, { Component } from 'react';
import '../../styles/pages/home/my-tech.css';
import vis from 'vis';
import $ from 'jquery';

export default class MyTech extends Component {
  constructor(options) {
    super(options);
  }
  componentDidMount() {
    var nodes = new vis.DataSet([
      /* Web Dev */
      {
        id: 1,
        label: 'Web Development',
        physics: false,
        x: 500
      },
      /* Front End */
      { id: 2, label: 'Front End' },
      { id: 3, label: 'Javascript' },
      { id: 4, label: 'jQuery' },
      { id: 5, label: 'ThreeJS' },
      { id: 6, label: 'HTML' },
      { id: 7, label: 'CSS' },
      { id: 8, label: 'SASS' },
      { id: 9, label: 'ReactJS' },
      { id: 10, label: 'Wordpress' },
      /* Back End */
      { id: 11, label: 'Paypal' },
      { id: 12, label: 'NodeJS' },
      { id: 13, label: 'ExpressJS' },
      { id: 14, label: 'MySQL' },
      { id: 15, label: 'Google Firebase' },

      /* Web Design 
      { id: 16, label: 'Web Design' },
      { id: 17, label: 'Adobe Photoshop' },
      { id: 18, label: 'Adobe Illustrator' },
      */

      /* Afterthoughts */
      { id: 19, label: 'PHP' },
      { id: 20, label: 'Back End' }
    ]);

    var edges = new vis.DataSet([
      /* Front End */
      { from: 1, to: 2 },
      { from: 2, to: 3 },
      { from: 3, to: 4 },
      { from: 3, to: 5 },
      { from: 3, to: 9 },
      { from: 2, to: 6 },
      { from: 2, to: 7 },
      { from: 7, to: 8 },
      { from: 2, to: 10 },
      { from: 2, to: 19 },

      /* Back End */
      { from: 1, to: 20 },
      { from: 20, to: 11 },
      { from: 20, to: 12 },
      { from: 20, to: 13 },
      { from: 20, to: 14 },
      { from: 20, to: 15 }

      /* Web Design
      { from: 16, to: 17 },
      { from: 16, to: 18 }
      */
    ]);

    var data = {
      nodes: nodes,
      edges: edges
    };

    var width = $('.vis-container').width();
    var height = $('.vis-container').height();
    var options = {
      width: width + 'px',
      height: height + 'px',
      autoResize: true,
      edges: {
        color: { color: 'white', highlight: 'white' },
        width: 5
      },
      nodes: {
        borderWidth: 4,
        chosen: false,
        margin: 13,
        shape: 'circle',
        font: {
          color: 'white',
          size: 24,
          face: 'Arial'
        },
        color: {
          border: '#d6614d',
          background: '#f47761'
        },
        shadow: { enabled: true }
      },
      interaction: {
        dragView: false,
        hover: false,
        selectConnectedEdges: false,
        zoomView: false
      },
      physics: {
        barnesHut: {
          springLength: 300,
          springConstant: 0.1,
          centralGravity: 0
        }
      },
      layout: {
        randomSeed: 12129030198236,
        improvedLayout: true,
        hierarchical: {
          enabled: false,
          levelSeparation: 150,
          direction: 'UD', // UD, DU, LR, RL
          sortMethod: 'hubsize' // hubsize, directed
        }
      }
    };

    var container = $('.vis-container')[0];

    var network = new vis.Network(container, data, options);
    network.moveNode(1, window.innerWidth * 0.7, null);

    network.once('afterDrawing', function() {
      network.moveTo({
        position: { x: 0, y: 0 },
        scale: 0.5
      });
    });
  }
  render() {
    return (
      <div className="MyTech">
        {/* The Text */}
        <div className="left-side anim-on-scroll">
          <div className="title">My Proficiencies</div>
        </div>

        {/* The Vis Network Canvas Container */}
        <div className="vis-container" />
      </div>
    );
  }
}
