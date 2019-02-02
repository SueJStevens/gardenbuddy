import React from "react";
// import "./style.css";
import { Modal, Button } from "react-materialize";

// By extending the React.Component class, Counter inherits functionality from it
function Login(props) {

    // The render method returns the JSX that should be rendered
    return (
        <form>
            <Modal
                header='Login To Garden Buddy'
                // bottomSheet
                trigger={<span style={{ fontWeight: "bold" }}>Login</span>}
                className="yellow lighten-5"
            >
                <div className="input-field">
                    <label for="email">Email</label>
                    <input id="email" value={props.username} onChange={props.onChange} name="username" type="email"></input>
                </div>
                <div className="input-field">
                    <label for="password">Password</label>
                    <input id="password" value={props.password} onChange={props.onChange} name="password" type="password"></input>
                </div>
                <Button onClick={props.handleLogin}>Login</Button>
            </Modal>
        </form>
    );
};

export default Login;
