import React, { Component } from 'react';
// import './App.css';
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Wrapper from "../components/Wrapper";
import BodyWraper from "../components/BodyWrapper";
import Greeting from "../components/Greeting";
import DepartmentContent from "../components/DepartmentContent";
import FruitsDepartment from "../components/FruitsDepartment";
import FooterDiv from "../components/Footer";


class Fruits extends Component {
  render() {
    return (
      <Wrapper>
        <Jumbotron>
          <Navbar />
          <Greeting lineOne="Fruits" />
          {/* lineTwo='"The fruit of your own hard work is the sweetest" - Deepika Padukone' */}
        </Jumbotron>
        <BodyWraper>
          <DepartmentContent>
            <FruitsDepartment />
          </DepartmentContent>
        </BodyWraper>
        <FooterDiv />
      </Wrapper>
    );
  }
}

export default Fruits;
