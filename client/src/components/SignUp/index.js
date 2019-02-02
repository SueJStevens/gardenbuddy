import React from "react";
import "./style.css";
import { Modal, Button, Col, Row } from "react-materialize";

// By extending the React.Component class, Counter inherits functionality from it
function SignUp(props) {

    // The render method returns the JSX that should be rendered
    return (
        <Modal
            header='Sign Up for Garden Buddy'
            trigger={<span>Register</span>}
            className="yellow lighten-5 container">
            <Row className="input-area">
                <Col s={12}>
                    <p>Please fill out your info below:</p>
                </Col>
            </Row>
            <form>
            
            <Row className="input-area">
                <div className="input-field col s6">
                    <label for="first-name-signup">First Name</label>
                    <input 
                        id="first-name-signup" 
                        type="text" 
                        name="firstName" 
                        onChange={props.onChange}
                        value={props.firstName}>
                    </input>
                </div>
                <div className="input-field col s6">
                    <label for="last-name-signup">Last Name</label>
                    <input 
                        id="last-name-signup" 
                        type="text" 
                        name="lastName"
                        onChange={props.onChange}
                        value={props.lastName}>
                    </input>
                </div>
            </Row>
            <Row className="input-area">
                <div className="input-field col s12">
                    <label for="phone-signup">Phone</label>
                    <input 
                        id="phone-signup" 
                        type="text" 
                        name="phone"
                        onChange={props.onChange}
                        value={props.phone}>
                    </input>
                </div>
            </Row>
            <Row className="input-area">
                <div className="input-field col s12">
                    <label for="email-signup">Email</label>
                    <input 
                        id="email-signup" 
                        type="email" 
                        name="username"
                        onChange={props.onChange}
                        value={props.username}>
                    </input>
                </div>
            </Row>
            <Row className="input-area">
                <div className="input-field col s12">
                    <label for="zip-code-signup">Zip Code</label>
                    <input 
                        id="zip-code-signup" 
                        type="text" 
                        name="zipcode"
                        onChange={props.onChange}
                        value={props.zipCode}>
                    </input>
                </div>
            </Row>
            <Row className="input-area">
                <Col className="input-field" s={6}>
                    <label for="city-signup">City</label>
                    <input 
                        id="city-signup" 
                        type="text" 
                        name="city"
                        onChange={props.onChange}
                        value={props.city}>
                    </input>
                </Col>

                <Col className="input-field" s={6}>
                    <label for="state-signup">State</label>
                    <input 
                        id="state-signup" 
                        type="text" 
                        name="st"
                        onChange={props.onChange}
                        value={props.st}>
                    </input>
                </Col>
            </Row>
            <Row className="input-area">
                <div className="input-field col s12">
                    <label for="about-me-signup">About Me</label>
                    <textarea 
                        className="materialize-textarea" 
                        id="about-me-signup" type="text-area" 
                        name="aboutme"
                        onChange={props.onChange}
                        value={props.aboutme}>
                    </textarea>
                </div>
            </Row>
            <Row className="input-area">
                <div className="input-field col s12">
                    <label for="password-signup">Password</label>
                    <input 
                        id="password-signup" 
                        type="password" 
                        name="password"
                        onChange={props.onChange}
                        value={props.password}>
                    </input>
                </div>
            </Row>
            <Button onClick={props.handleSignup} type="submit">Sign Up</Button>
            </form>
        </Modal>
    );
};

export default SignUp;
