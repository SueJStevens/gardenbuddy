import React, { Component } from 'react';
// import './App.css';
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Wrapper from "../components/Wrapper";
import BodyWraper from "../components/BodyWrapper";
import BodyContent from "../components/BodyContent";
import FooterDiv from "../components/Footer";

class TeamProfile extends Component {
  render() {
    return (
      <Wrapper>
        <Jumbotron>
          <Navbar />
        </Jumbotron>
        <BodyWraper>
            
        </BodyWraper>
        <FooterDiv />
      </Wrapper>
    );
  }
}

export default TeamProfile;
