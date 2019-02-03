import React, { Component } from 'react';
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Wrapper from "../components/Wrapper";
import BodyWraper from "../components/BodyWrapper";
import Greeting from "../components/Greeting";
import FooterDiv from "../components/Footer";
import HerbsDepartment from "../components/HerbsDepartment";


class Herbs extends Component {
  render() {
    return (
      <Wrapper>
        <Jumbotron>
          <Navbar user={this.props.user} onChange={this.props.onChange} handleLogin={this.props.handleLogin} handleSignup={this.props.handleSignup}/>
          <Greeting lineOne="Herbs" />
          {/* lineTwo='"Ounce for ounce, herbs and spices have more antioxidants than any other food group." - Michael Greger' */}
        </Jumbotron>
        <BodyWraper>
          <HerbsDepartment />
        </BodyWraper>
        <FooterDiv />
      </Wrapper>
    );
  }
}

export default Herbs;
