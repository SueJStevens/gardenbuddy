import React, { Component } from 'react';
// import './App.css';
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Wrapper from "../components/Wrapper";
import BodyWraper from "../components/BodyWrapper";
import Greeting from "../components/Greeting";
import BodyContent from "../components/BodyContent";

class Landing extends Component {
  render() {
    return (
      <Wrapper>
        <Jumbotron>
          <Navbar />
        </Jumbotron>
        <BodyWraper>
          <Greeting />
          <BodyContent />
        </BodyWraper>
      </Wrapper>
    );
  }
}

export default Landing;
