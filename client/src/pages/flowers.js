import React, { Component } from 'react';
// import './App.css';
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Wrapper from "../components/Wrapper";
import BodyWraper from "../components/BodyWrapper";
import Greeting from "../components/Greeting";
import BodyContent from "../components/BodyContent";
import FooterDiv from "../components/Footer";


class Flowers extends Component {
  render() {
    return (
      <Wrapper>
        <Jumbotron>
          <Navbar />
          <Greeting lineOne="Flowers" />
          {/* lineTwo='"Just living is not enough...one must have sunshine, freedom, and a little flower." - Hans Christian Andersen' */}
        </Jumbotron>
        <BodyWraper>

        </BodyWraper>
        <FooterDiv />
      </Wrapper>
    );
  }
}

export default Flowers;
