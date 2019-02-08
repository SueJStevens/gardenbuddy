import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./style.css";
import AboutMe from "../AboutMe";
import ContactInfo from "../ContactInfo";
import NotificationsList from "../NotificationList";
import UpdateLogin from "../UpdateLogin";
import VirtualGarden from "../VirtualGarden";
import { Col } from "react-materialize";

// By extending the React.Component class, Counter inherits functionality from it
class ProfileContent extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         username: "",
    //         password: "",
    //         phone: "",
    //         firstName: "Friend",
    //         lastName: "",
    //         zipcode: "",
    //         city: "",
    //         st: "",
    //         aboutme: "",
    //     }
    // }

    //     componentDidMount() {
    //         this.setState = {
    //             username: this.props.user.username,
    //             password: this.props.user.password,
    //             phone: this.props.user.phone,
    //             firstName: this.props.user.firstName,
    //             lastName: this.props.user.lastName,
    //             zipcode: this.props.user.zipcode,
    //             city: this.props.user.city,
    //             st: this.props.st,
    //             aboutme: this.props.aboutme,
    //         }

    //     }


        render() {
            let myProps = this.props.user;
            console.log(myProps);
            console.log(this.props.gardenSize);
            // The render method returns the JSX that should be rendered
            return (
                <wrapper className="container profile-content">
                    <Col l={7} m={10} s={12} className="offset-m1">
                        <Switch>
                            {/* this is where i think i need the routing for these compenents */}
                            <Route exact path="/profile" render={props => <AboutMe {...props} user={myProps}/>} />
                            <Route exact path="/profile/aboutme" render={props => <AboutMe {...props} user={myProps} gardenSize={this.props.gardenSize}/>} />
                            <Route exact path="/profile/contactinfo" render={props => <ContactInfo {...props} user={myProps}/>} />
                            <Route exact path="/profile/notifications" render={props => <NotificationsList {...props} user={myProps}/>} />
                            <Route exact path="/profile/updatelogin" render={props => <UpdateLogin {...props} user={myProps}/>} />
                            <Route exact path="/profile/virtualgarden" render={props => <VirtualGarden {...props} user={myProps}/>}/>
                        </Switch>
                    </Col>
                </wrapper>
            )
        };
    };


    export default ProfileContent;


