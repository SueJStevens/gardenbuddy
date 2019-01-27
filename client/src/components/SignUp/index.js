import React from "react";
import "./style.css";
import { Modal, Button, Col, Row } from "react-materialize";

// By extending the React.Component class, Counter inherits functionality from it
function SignUp(props) {

    // The render method returns the JSX that should be rendered
    return (
        <Modal className="container"
            header='Sign Up for Garden Buddy'
            trigger={<span>Register</span>}>
            <Row>
                <Col s={12}>
                    <p>Please fill out your info below:</p>
                </Col>
            </Row>
            <form method="POST" action="/signup">
            <Row className="input-area">
                <div className="input-field col s6">
                    <label for="first-name-signup">First Name</label>
                    <input id="first-name-signup" type="text" name="firstName"></input>
                </div>
                <div className="input-field col s6">
                    <label for="last-name-signup">Last Name</label>
                    <input id="last-name-signup" type="text" name="lastName"></input>
                </div>
            </Row>
            <Row className="input-area">
                <div className="input-field col s12">
                    <label for="phone-signup">Phone</label>
                    <input id="phone-signup" type="text" name="phone"></input>
                </div>
            </Row>
            <Row className="input-area">
                <div className="input-field col s12">
                    <label for="email-signup">Email</label>
                    <input id="email-signup" type="email" name="email"></input>
                </div>
            </Row>
            <Row className="input-area">
                <div className="input-field col s12">
                    <label for="zip-code-signup">Zip Code</label>
                    <input id="zip-code-signup" type="text" name="zipCode"></input>
                </div>
            </Row>
            <Row className="input-area">
                <Col className="input-field" s={6}>
                    <label for="city-signup">City</label>
                    <input id="city-signup" type="text" name="city"></input>
                </Col>

                <Col className="input-field" s={6}>
                    <label for="state-signup">State</label>
                    <input id="state-signup" type="text" name="state"></input>
                </Col>
            </Row>
            <Row className="input-area">
                <div className="input-field col s12">
                    <label for="about-me-signup">About Me</label>
                    <textarea className="materialize-textarea" id="about-me-signup" type="text-area" name="aboutMe"></textarea>
                </div>
            </Row>
            <Row className="input-area">
                <div className="input-field col s12">
                    <label for="password-signup">Password</label>
                    <input id="password-signup" type="password" name="password"></input>
                </div>
            </Row>
            <Button onClick={props.formSubmit} type="submit">Sign Up</Button>
            </form>
        </Modal>
    );
};

export default SignUp;
