import React from "react";
import Intro from "./Intro.js";
import Languages from "./Languages.js";
import Education from "./Education";

class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <Intro />
        <Languages />
        <Education />
      </React.Fragment>
    );
  }
}

export default Home;
