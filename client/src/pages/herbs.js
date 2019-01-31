import React, { Component } from 'react';
// import './App.css';
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Wrapper from "../components/Wrapper";
import BodyWraper from "../components/BodyWrapper";
import Greeting from "../components/Greeting";
import FooterDiv from "../components/Footer";
import DepartmentContent from "../components/DepartmentContent";
import HerbsDepartment from "../components/HerbsDepartment";


class Herbs extends Component {
  render() {
    return (
      <Wrapper>
        <Jumbotron>
          <Navbar />
          <Greeting lineOne="Herbs" />
          {/* lineTwo='"Ounce for ounce, herbs and spices have more antioxidants than any other food group." - Michael Greger' */}
        </Jumbotron>
        <BodyWraper>
            <DepartmentContent>
                <HerbsDepartment />
            </DepartmentContent>
        </BodyWraper>
        <FooterDiv />
      </Wrapper>
    );
  }
}

export default Herbs;