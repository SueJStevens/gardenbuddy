import React, { Component } from "react";
import "./style.css";
import { Modal, Button } from "react-materialize";

// By extending the React.Component class, Counter inherits functionality from it
class Login extends Component {

    state = {
        forgotPassword: false
    }

    forgotPassword = (event) => {
        event.preventDefault();
        console.log("forgot password");
        this.setState({
            forgotPassword: true
        })
        //TODO:
        //code here for the request to reset the password
        
    }

    cancelForgotPass = (event) => {
        event.preventDefault()
        this.setState({
            forgotPassword: false
        })
    }

    

    render() {

        if (!this.state.forgotPassword) {

            // The render method returns the JSX that should be rendered
            return (
                <form>
                    <Modal
                        id="login-modal"
                        header='Login To Garden Buddy'
                        trigger={<span style={{ fontWeight: "bold" }}>Login</span>}
                        className="yellow lighten-5"
                    >
                        <p>{this.props.username}</p>
                        <div className="input-field">
                            <label htmlFor="login-email">Email</label>
                            <input id="login-email" value={this.props.user.username} onChange={this.props.onChange} name="username" type="email"></input>
                        </div>
                        <div className="input-field">
                            <label htmlFor="login-password">Password</label>
                            <input id="login-password" value={this.props.user.password} onChange={this.props.onChange} name="password" type="password"></input>
                        </div>
                        <Button className="auth-button" onClick={this.props.handleLogin}>Login</Button><br /><br />
                        <a href="#" onClick={this.forgotPassword}>Forgot Your Email or Password?</a>
                    </Modal>
                </form>
            )
        } else {
            return (
                <form>
                    <Modal id="login-modal"
                        header='Reset Your Password'
                        trigger={<span style={{ fontWeight: "bold" }}>Login</span>}
                        actions={<Button className="forgot-pass-btn" onClick={this.cancelForgotPass}>Close</Button>}
                        className="yellow lighten-5">
                        <p>Input the email we have on file for your account, and we will send you an email to reset your password. The link is only valid for 1 hour.</p><br />
                        <div className="input-field">
                            <label htmlFor="login-email">Email Used To Login</label>
                            <input id="login-email" value={this.props.user.username} onChange={this.props.onChange} name="username" type="email"></input>
                        </div>
                        <Button className="auth-button">Submit</Button>
                        <Button onClick={this.cancelForgotPass} className="forgot-pass-btn">Cancel</Button><br /><br /><br /><br />

                    </Modal>
                </form>
            )
        };
    };
};

export default Login;
