import React, { Component } from "react";
import NavbarProfile from "../components/Navbar-profile";
import ProfileHeader from "../components/ProfileHeader";
import ProfileBody from "../components/ProfileBody";
import Wrapper from "../components/Wrapper";
import { Redirect } from "react-router-dom";
import axios from 'axios';



// By extending the React.Component class, Counter inherits functionality from it
class Profile extends Component {

    state = {
        loggedIn: false
    }

    componentDidMount() {
        axios.get("/auth/user").then((response) => {
          console.log(response.data);
    
          if (response.data) {
          this.setState({
            loggedIn: true
          })
        }
        })
      }

render () {

    if (this.state.loggedIn) {

    // The render method returns the JSX that should be rendered
    return (
        // use bootstrap to create a navbar
        <Wrapper>
            <NavbarProfile />
            <ProfileHeader user={this.props.user}/>
            <ProfileBody user={this.props.user}/>
        </Wrapper>
    );
} else {
    return (
        <Redirect to={{pathname:"/", state:this.props.user}}></Redirect>
    )
}
}
};


export default Profile;


