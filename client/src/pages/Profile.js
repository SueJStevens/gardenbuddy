import React from "react";
import NavbarProfile from "../components/Navbar-profile";
import ProfileHeader from "../components/ProfileHeader";
import ProfileBody from "../components/ProfileBody";
<<<<<<< HEAD
import { Row } from "react-materialize";
import Wrapper from "../components/Wrapper";
=======
>>>>>>> 742f4d2e2ef6c04a035baa56ecd3018807dbce24


// By extending the React.Component class, Counter inherits functionality from it
function Profile(props) {

    // The render method returns the JSX that should be rendered
    return (
        // use bootstrap to create a navbar
        <Wrapper>
            <NavbarProfile />
            <ProfileHeader />
<<<<<<< HEAD
            <Row className="profile-content">
                <ProfileBody />
            </Row>
        </Wrapper>
=======
            <ProfileBody />
        </wrapper>
>>>>>>> 742f4d2e2ef6c04a035baa56ecd3018807dbce24
    );
};

export default Profile;


