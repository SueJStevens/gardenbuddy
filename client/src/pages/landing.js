import React, { Component } from 'react';
// import './App.css';
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Wrapper from "../components/Wrapper";
import BodyWraper from "../components/BodyWrapper";
import Greeting from "../components/Greeting";
import BodyContent from "../components/BodyContent";
import SearchCategoryBar from "../components/SearchCategoryBar";
import FooterDiv from "../components/Footer";

class Landing extends Component {
  render() {
    return (
      <Wrapper>
        <Jumbotron>
          <Navbar />
          {/* <SearchCategoryBar /> */}
        </Jumbotron>
        <BodyWraper>
          <BodyContent />
        </BodyWraper>
        <FooterDiv />
      </Wrapper>
    );
  }
}

export default Landing;
