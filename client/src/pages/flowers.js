import React, { Component } from 'react'; 
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Wrapper from "../components/Wrapper";
import BodyWraper from "../components/BodyWrapper";
import Greeting from "../components/Greeting";
import FooterDiv from "../components/Footer";
import FlowerDepartment from "../components/FlowerDepartment";

class Flowers extends Component {
  render() {
    return (
      <Wrapper>
        <Jumbotron>
          <Navbar user={this.props.user} onChange={this.props.onChange} handleLogin={this.props.handleLogin} handleSignup={this.props.handleSignup}/>
          <Greeting lineOne="Flowers" />
          {/* lineTwo='"Just living is not enough...one must have sunshine, freedom, and a little flower." - Hans Christian Andersen' */}
        </Jumbotron>
        <BodyWraper>
          <FlowerDepartment />
        </BodyWraper>
        <FooterDiv />
      </Wrapper>
    );
  }
}

export default Flowers;
