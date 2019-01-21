import React from "react";
import "./style.css";
import { Card, CardTitle, Row, Col } from "react-materialize";

// By extending the React.Component class, Counter inherits functionality from it
function ProfileHeader(props) {

    // The render method returns the JSX that should be rendered
    return (
        <wrapper className="container">
            <Row className="profile-header">
                <Col s={10} className="offset-s1">
                    <Card className='medium hoverable'
                        header={<CardTitle image='https://via.placeholder.com/500'></CardTitle>}
                        actions={[<a href='#'>This is a Link</a>]}>
                        <figure className="card-profile-image">
                            <img src="https://via.placeholder.com/300/000000" className="circle z-depth-2 responsive-img profile-img" />
                        </figure>
                        <Row>
                            <Col s={7} className="offset-s4">
                                <div className="user-info">
                                    <h5>Test User</h5>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </wrapper>
    );
};

export default ProfileHeader;


