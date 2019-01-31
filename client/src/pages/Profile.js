import React from "react";
import NavbarProfile from "../components/Navbar-profile";
import ProfileHeader from "../components/ProfileHeader";
import ProfileBody from "../components/ProfileBody";
// import { Row } from "react-materialize";
import Wrapper from "../components/Wrapper";


// By extending the React.Component class, Counter inherits functionality from it
function Profile(props) {

    // The render method returns the JSX that should be rendered
    return (
        // use bootstrap to create a navbar
        <Wrapper>
            <NavbarProfile />
            <ProfileHeader />
            <ProfileBody />
        </Wrapper>
    );
};

export default Profile;


