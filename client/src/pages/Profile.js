import React from "react";
import Navbar from "../components/Navbar";
import ProfileHeader from "../components/ProfileHeader";
import ProfileSelector from "../components/ProfileSelector";
import ProfileContent from "../components/ProfileContent";
import { Row } from "react-materialize";


// By extending the React.Component class, Counter inherits functionality from it
function Profile(props) {

    // The render method returns the JSX that should be rendered
    return (
        // use bootstrap to create a navbar
        <wrapper className="container">
            <Navbar />
            <ProfileHeader />
            <Row className="profile-content">
                <ProfileSelector />
                <ProfileContent />
            </Row>
        </wrapper>
    );
};

export default Profile;


