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
          <Navbar user={this.props.user} onChange={this.props.onChange} handleLogin={this.props.handleLogin} handleSignup={this.props.handleSignup} handleLogout={this.props.handleLogout}/>
          <Greeting lineOne="Flowers" />
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
