import React, { Component } from "react";
import NavbarProfile from "../components/Navbar-profile";
import ProfileHeader from "../components/ProfileHeader";
import ProfileBody from "../components/ProfileBody";
import Wrapper from "../components/Wrapper";
import axios from "axios";
// import $ from "jquery";


// By extending the React.Component class, Counter inherits functionality from it
class Profile extends Component {

    render() {
        
        // The render method returns the JSX that should be rendered
        return (
            <Wrapper>
                <NavbarProfile user={this.props.user} handleLogout={this.props.handleLogout}/>
                <ProfileHeader user={this.props.user}  />
                <ProfileBody user={this.props.user} />
            </Wrapper>
        );

    }
};


export default Profile;


