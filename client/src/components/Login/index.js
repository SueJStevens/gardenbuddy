import React from "react";
// import "./style.css";
import { Modal, Button } from "react-materialize";

// By extending the React.Component class, Counter inherits functionality from it
function Login(props) {

    // The render method returns the JSX that should be rendered
    return (
        <form>
            <Modal
                id="login-modal"
                header='Login To Garden Buddy'
                trigger={<span style={{ fontWeight: "bold" }}>Login</span>}
                className="yellow lighten-5"
            >
            <p>{props.username}</p>
                <div className="input-field">
                    <label htmlFor="login-email">Email</label>
                    <input id="login-email" value={props.user.username} onChange={props.onChange} name="username" type="email"></input>
                </div>
                <div className="input-field">
                    <label htmlFor="login-password">Password</label>
                    <input id="login-password" value={props.user.password} onChange={props.onChange} name="password" type="password"></input>
                </div>
                <Button className="auth-button" onClick={props.handleLogin}>Login</Button><br /><br />
                <a href="#" onClick={props.forgotPassword}>Forgot Your Email or Password?</a>
            </Modal>
        </form>
    );
};

export default Login;
