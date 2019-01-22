import React from "react";
import "./style.css";
import { Card, Col, Collection, CollectionItem } from "react-materialize";
import {Link} from "react-router-dom";

// By extending the React.Component class, Counter inherits functionality from it
function ProfileSelector(props) {
    console.log(props.children);

    // The render method returns the JSX that should be rendered
    return (
        <wrapper className="container" id="profile-selection">
                <Col s={3} className="offset-s1">
                    <Card title='Profile' className="hoverable">
                        <Collection>
                            <Link to="/profile/aboutme"><CollectionItem onClick={() => props.activeComponent("about-me")} className="profile-selector" id="about-me" href="#" active><i className="fas fa-user"></i>About Me</CollectionItem></Link>
                            <Link to="/profile/contactinfo"><CollectionItem onClick={() => props.activeComponent("contact-info")} className="profile-selector" id="contact-info" href="#"><i className="fas fa-address-book"></i>Contact Info</CollectionItem></Link>
                            <Link to="/profile/notifications"><CollectionItem onClick={() => props.activeComponent("notifications")} className="profile-selector" id="notifications" href="#"><i className="fas fa-bell"></i>Notifications</CollectionItem></Link>
                            <Link to="/profile/updatelogin"><CollectionItem onClick={() => props.activeComponent("update-login")} className="profile-selector" id="update-login" href="#"><i className="fas fa-pencil-alt"></i>Update Login</CollectionItem></Link>
                        </Collection>
                    </Card>
                </Col>
        </wrapper>
    );
};
export default ProfileSelector;


