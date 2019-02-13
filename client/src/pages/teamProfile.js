import React, { Component } from 'react';
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
          <Navbar user={this.props.user} onChange={this.props.onChange} handleLogin={this.props.handleLogin} handleSignup={this.props.handleSignup}/>
          <Greeting lineOne="Hey there," lineTwo="this is our BeLeaf team!" />
        </Jumbotron>
        <BodyWraper>
            <div className="row">
                {Teammates.map((teammate) => (
                    <TeamProfileCard 
                        key={teammate.name}
                        name={teammate.name}
                        image={teammate.image}
                        personalWebLink={teammate.personalWebLink}
                        github={teammate.github}
                        intro={teammate.intro}
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
