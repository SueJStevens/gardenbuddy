import React from "react";
import "./style.css";
import { Card, Row, Col, Collection, CollectionItem } from "react-materialize";

// By extending the React.Component class, Counter inherits functionality from it
function ProfileContent(props) {

    // The render method returns the JSX that should be rendered
    return (
        <wrapper className="container">
            <Row className="profile-content">
                <Col s={3} className="offset-s1">
                    <Card title='Profile'>
                        <Collection>
                            <CollectionItem href='#' active><i class="fas fa-user"></i>About Me</CollectionItem>
                            <CollectionItem href='#'><i class="fas fa-address-book"></i>Contact Info</CollectionItem>
                            <CollectionItem href='#'><i class="fas fa-bell"></i>Notifications</CollectionItem>
                            <CollectionItem href='#'><i class="fas fa-pencil-alt"></i>Update Login</CollectionItem>
                        </Collection>
                    </Card>
                </Col>
                <Col s={7}>
                    <Card textClassName='white-text' title='Profile Info' actions={[<a href='#'>Update Profile Info</a>]}>
                        I am a very simple card.
                    </Card>
                </Col>
            </Row>
        </wrapper>
    );
};

export default ProfileContent;


