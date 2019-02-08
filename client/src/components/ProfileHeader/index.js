import React, { Component } from "react";
import "./style.css";
import { Card, CardTitle, Row, Col, Chip } from "react-materialize";
import API from "../../utils/API";

// By extending the React.Component class, Counter inherits functionality from it
class ProfileHeader extends Component {

    state = {
        gardenSize: 0
    }

    constructor(props) {
        super(props);
        let userName = this.props.user.username;
        API.getVirtualGarden(userName).then((res) => {

            // If the user has no virtual plants in their virtual garden yet,
            // set 'my_plants' to an empty array.
            // Else, sort the virtual garden so that the plants whose watering
            // is overdue are displayed first
            // console.log("Got virtual garden length " + res.data.length)
            this.setState({gardenSize: res.data.length})

        });
    }

    render() {

        // The render method returns the JSX that should be rendered
        return (
            <wrapper className="container">
                <Row className="profile-header">
                    <Col s={10} m={10} l={10} className=" offset-s1 offset-l1 offset-m1">
                        <Card className='medium'
                            header={<CardTitle image='https://via.placeholder.com/500'></CardTitle>}
                        //actions={[<a href='#'>This is a Link</a>]}
                        >
                            <figure className="card-profile-image">
                                <img src="https://via.placeholder.com/300/000000" alt='Profile' className="circle z-depth-2 responsive-img profile-img" />
                            </figure>
                            <Row>
                                <Col s={6} l={6} className="offset-s4">
                                    <Row>
                                        <div className="user-info">
                                            <h5 className="users-profile-header-name">{this.props.user.firstName} {this.props.user.lastName}</h5>
                                        </div>
                                    </Row>
                                    <Row className="user-chip-row">
                                        <Col s={4}>
                                            <Chip>
                                                <img className="plants-count-img" src='https://cdn.pixabay.com/photo/2018/05/21/23/54/leaves-3420078_1280.jpg' alt='Contact Person' />
                                                {this.state.gardenSize} Plants
                                            </Chip>
                                        </Col>
                                        <Col s={4}>
                                            <Chip>
                                                <img src='https://cdn.pixabay.com/photo/2017/10/17/20/42/social-network-icon-2862113_1280.png' alt='Contact Person' />
                                                35 Friends
                                            </Chip>
                                        </Col>
                                        <Col s={4}>
                                            <Chip>
                                                <img src='https://cdn12.picryl.com/photo/2016/12/31/icon-contact-cloud-computer-communication-3d8f39-1024.png' alt='Contact Person' />
                                                San Diego
                                            </Chip>
                                        </Col>
                                    </Row>

                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </wrapper>
        );
    }
};

export default ProfileHeader;


