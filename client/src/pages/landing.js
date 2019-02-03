import React, { Component } from 'react';
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Wrapper from "../components/Wrapper";
import BodyWraper from "../components/BodyWrapper";
import Greeting from "../components/Greeting";
import BodyContent from "../components/BodyContent";
import FooterDiv from "../components/Footer";
import NewComerIns from "../components/NewComerIns";


class Landing extends Component {
  render() {
    return (
      <Wrapper>
        <Jumbotron>
          <Navbar user={this.props.user} onChange={this.props.onChange} handleLogin={this.props.handleLogin}/>
          <Greeting lineOne={`Hello there, ${this.props.user.firstName}`} lineTwo="Welcome to GardenBuddy!"/>
          <NewComerIns />
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
