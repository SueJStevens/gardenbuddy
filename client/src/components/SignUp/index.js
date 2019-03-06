import React from "react";
import "./style.css";
import { Modal, Button, Col, Row, Input } from "react-materialize";

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
                        <label htmlFor="first-name-signup">First Name</label>
                        <input
                            id="first-name-signup"
                            type="text"
                            name="firstName"
                            onChange={props.onChange}
                            value={props.firstName}>
                        </input>
                    </div>
                    <div className="input-field col s6">
                        <label htmlFor="last-name-signup">Last Name</label>
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
                        <label htmlFor="phone-signup">Phone</label>
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
                        <label htmlFor="email-signup">Email</label>
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
                        <label htmlFor="zip-code-signup">Zip Code</label>
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
                        <label htmlFor="city-signup">City</label>
                        <input
                            id="city-signup"
                            type="text"
                            name="city"
                            onChange={props.onChange}
                            value={props.city}>
                        </input>
                    </Col>

                    <Col className="input-field" s={6}>
                        {/* <label htmlFor="state-signup">State</label>
                        <input
                            id="state-signup"
                            type="text"
                            name="st"
                            onChange={props.onChange}
                            value={props.st}
                            >
                        </input> */}
                        <Input
                            // s={12} m={4} l={4}
                            // onChange={(event) => { this.handleUserStateSearch(event) }}
                            type='select'
                            label="Choose a State"
                            defaultValue='start'
                            id="state-signup"
                            name="st"
                            onChange={props.onChange}
                            value={props.st}>
                            <option value='start'>Select</option>
                            <option value='Alabama'>Alabama</option>
                            <option value='Alaska'>Alaska</option>
                            <option value='Arizona'>Arizona</option>
                            <option value='Arkansas'>Arkansas</option>
                            <option value='California'>California</option>
                            <option value='Colorado'>Colorado</option>
                            <option value='Connecticut'>Connecticut</option>
                            <option value='Delaware'>Delaware</option>
                            <option value='Florida'>Florida</option>
                            <option value='Georgia'>Georgia</option>
                            <option value='Hawaii'>Hawaii</option>
                            <option value='Idaho'>Idaho</option>
                            <option value='Illinois'>Illinois</option>
                            <option value='Indiana'>Indiana</option>
                            <option value='Iowa'>Iowa</option>
                            <option value='Kansas'>Kansas</option>
                            <option value='Kentucky'>Kentucky</option>
                            <option value='Louisiana'>Louisiana</option>
                            <option value='Maine'>Maine</option>
                            <option value='Maryland'>Maryland</option>
                            <option value='Massachusetts'>Massachusetts</option>
                            <option value='Michigan'>Michigan</option>
                            <option value='Minnesota'>Minnesota</option>
                            <option value='Mississippi'>Mississippi</option>
                            <option value='Missouri'>Missouri</option>
                            <option value='Montana'>Montana</option>
                            <option value='Nebraska'>Nebraska</option>
                            <option value='Nevada'>Nevada</option>
                            <option value='New Hampshire'>New Hampshire</option>
                            <option value='New Jersey'>New Jersey</option>
                            <option value='New Mexico'>New Mexico</option>
                            <option value='New York'>New York</option>
                            <option value='North Carolina'>North Carolina</option>
                            <option value='North Dakota'>North Dakota</option>
                            <option value='Ohio'>Ohio</option>
                            <option value='Oklahoma'>Oklahoma</option>
                            <option value='Oregon'>Oregon</option>
                            <option value='Pennsylvania'>Pennsylvania</option>
                            <option value='Rhode Island'>Rhode Island</option>
                            <option value='South Carolina'>South Carolina</option>
                            <option value='South Dakota'>South Dakota</option>
                            <option value='Tennessee'>Tennessee</option>
                            <option value='Texas'>Texas</option>
                            <option value='Utah'>Utah</option>
                            <option value='Vermont'>Vermont</option>
                            <option value='Virginia'>Virginia</option>
                            <option value='Washington'>Washington</option>
                            <option value='West Virginia'>West Virginia</option>
                            <option value='Wisconsin'>Wisconsin</option>
                            <option value='Wyoming'>Wyoming</option>
                            <option value='District of Colombia'>District of Colombia</option>
                        </Input>
                    </Col>
                </Row>
                <Row className="input-area">
                    <Col s={2} >
                        <i className="signup-form-icon fas fa-user-circle"></i>
                    </Col>
                    <Col className="input-field" s={10}>
                        <label htmlFor="profile-pic-signup">Profile Picture (URL)</label>
                        <input
                            id="profile-pic-signup"
                            type="text"
                            name="profilepic"
                            onChange={props.onChange}
                            value={props.profilepic}
                        >
                        </input>
                    </Col>
                </Row>
                <Row className="input-area">
                    <Col s={2}>
                        <i className="signup-form-icon fas fa-image"></i>
                    </Col>
                    <Col className="input-field" s={10}>
                        <label htmlFor="cover-pic-signup">Cover Photo (URL)</label>
                        <input
                            id="cover-pic-signup"
                            type="text"
                            name="coverphoto"
                            onChange={props.onChange}
                            value={props.coverphoto}
                        >
                        </input>
                    </Col>
                </Row>
                <Row className="input-area">
                    <div className="input-field col s12">
                        <label htmlFor="about-me-signup">About Me</label>
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
                        <label htmlFor="password-signup">Password</label>
                        <input
                            id="password-signup"
                            type="password"
                            name="password"
                            onChange={props.onChange}
                            value={props.password}>
                        </input>
                    </div>
                </Row>
                <Button className="auth-button" onClick={props.handleSignup} type="submit">Sign Up</Button>
            </form>
        </Modal>
    );
};

export default SignUp;
