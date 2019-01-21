import React from "react";
import "./style.css";
import { Card, Row, Col, Collection, CollectionItem } from "react-materialize";

// By extending the React.Component class, Counter inherits functionality from it
function ProfileSelector(props) {

    // The render method returns the JSX that should be rendered
    return (
        <wrapper className="container">
                <Col s={3} className="offset-s1">
                    <Card title='Profile' className="hoverable">
                        <Collection>
                            <CollectionItem href='#' active><i class="fas fa-user"></i>About Me</CollectionItem>
                            <CollectionItem href='#'><i class="fas fa-address-book"></i>Contact Info</CollectionItem>
                            <CollectionItem href='#'><i class="fas fa-bell"></i>Notifications</CollectionItem>
                            <CollectionItem href='#'><i class="fas fa-pencil-alt"></i>Update Login</CollectionItem>
                        </Collection>
                    </Card>
                </Col>
        </wrapper>
    );
};

export default ProfileSelector;


