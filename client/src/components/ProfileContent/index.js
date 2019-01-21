import React from "react";
import "./style.css";
import AboutMe from "../AboutMe";
import ContactInfo from "../ContactInfo";
import NotificationsList from "../NotificationList";
import UpdateLogin from "../UpdateLogin";
import { Col } from "react-materialize";

// By extending the React.Component class, Counter inherits functionality from it
function ProfileContent(props) {

    // The render method returns the JSX that should be rendered
    return (
        <wrapper className="container profile-content">
                <Col s={7}>
                    <AboutMe />
                    <ContactInfo />
                    <NotificationsList />
                    <UpdateLogin />
                </Col>
        </wrapper>
    );
};

export default ProfileContent;


