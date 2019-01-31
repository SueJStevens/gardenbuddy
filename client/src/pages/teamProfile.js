import React, { Component } from 'react';
// import './App.css';
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Wrapper from "../components/Wrapper";
import BodyWraper from "../components/BodyWrapper";
import FooterDiv from "../components/Footer";
import TeamProfileCard from "../components/TeamProfileCard";
import Teammates from "../teamProfile.json";
import Greeting from "../components/Greeting";

class TeamProfile extends Component {
  render() {
    return (
      <Wrapper>
        <Jumbotron>
          <Navbar />
          <Greeting lineOne="Hey there," lineTwo="this is our BeLeaf team!" />
        </Jumbotron>
        <BodyWraper>
            <div className="row">
                {Teammates.map((teammate) => (
                    <TeamProfileCard 
                        name={teammate.name}
                        image={teammate.image}
                        personalWebLink={teammate.personalWebLink}
                        github={teammate.github}
                    />
                ))}
            </div>
        </BodyWraper>
        <FooterDiv />
      </Wrapper>
    );
  }
}

export default TeamProfile;
