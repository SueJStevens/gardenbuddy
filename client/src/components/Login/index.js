import React from "react";
// import "./style.css";
import {Modal, Button} from "react-materialize";

// By extending the React.Component class, Counter inherits functionality from it
function Login(props) {

    // The render method returns the JSX that should be rendered
    return (
        <Modal
            header='Login To Garden Buddy'
            // bottomSheet
            trigger={<span style={{ fontWeight: "bold" }}>Login</span>}>
            <label for="email">Email</label>
            <input id="email" type="email" placeholder="Email"></input>
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="password"></input>
            <Button>Login</Button>
        </Modal>
    );
};

export default Login;
