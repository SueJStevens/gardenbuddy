import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import AboutMe from "../AboutMe";
import ContactInfo from "../ContactInfo";
import NotificationsList from "../NotificationList";
import UpdateLogin from "../UpdateLogin";
import VirtualGarden from "../VirtualGarden";
import { Col } from "react-materialize";

// By extending the React.Component class, Counter inherits functionality from it
function ProfileContent(props) {

    // The render method returns the JSX that should be rendered
    return (
        <wrapper className="container profile-content">
            <Col s={7}>
                <Switch>
                        {/* this is where i think i need the routing for these compenents */}
                        <Route exact path="/profile" component={AboutMe} />
                        <Route exact path="/profile/aboutme" component={AboutMe} />
                        <Route exact path="/profile/contactinfo" component={ContactInfo} />
                        <Route exact path="/profile/notifications" component={NotificationsList} />
                        <Route exact path="/profile/updatelogin" component={UpdateLogin} />
                        <Route exact path="/profile/virtualgarden" component={VirtualGarden} />
                </Switch>
            </Col>
        </wrapper>
    );
};

export default ProfileContent;


