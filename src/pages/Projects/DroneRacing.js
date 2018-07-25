import React from 'react';
import thumbnail from '../../assets/images/projects/drone-racing-1.png';

export default class DroneRacing {
  title() {
    return <div className="project-title">Intel Xeon Racing</div>;
  }
  body() {
    return (
      <div className="project-body intel-xeon">
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        <br /> <br />
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        <br />
        <br />
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit ess quam
        nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?"
      </div>
    );
  }
  thumbnail() {
    return <img src={thumbnail} className="project-thumbnail" />;
  }
  description() {
    return (
      <div className="project-description">
        Intel Drone Racing was the first project I ever worked on
        professionally.
      </div>
    );
  }
}
