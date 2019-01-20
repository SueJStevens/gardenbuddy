import React from "react";
import Navbar from "../components/Navbar";
import ProfileHeader from "../components/ProfileHeader";
import ProfileContent from "../components/ProfileContent"

// By extending the React.Component class, Counter inherits functionality from it
function Profile(props) {

    // The render method returns the JSX that should be rendered
    return (
        // use bootstrap to create a navbar
        <wrapper className="container">
            <Navbar />
            <ProfileHeader />
            <ProfileContent />
        </wrapper>
    );
};

export default Profile;


