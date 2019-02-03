import React, { Component } from "react";
import NavbarProfile from "../components/Navbar-profile";
import ProfileHeader from "../components/ProfileHeader";
import ProfileBody from "../components/ProfileBody";
import Wrapper from "../components/Wrapper";


// By extending the React.Component class, Counter inherits functionality from it
class Profile extends Component {

render () {

    // The render method returns the JSX that should be rendered
    return (
        // use bootstrap to create a navbar
        <Wrapper>
            <NavbarProfile />
            <ProfileHeader user={this.props.user}/>
            <ProfileBody user={this.props.user}/>
        </Wrapper>
    );
}
};


export default Profile;


