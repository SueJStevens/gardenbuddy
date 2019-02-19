import React, { Component } from 'react';
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Wrapper from "../components/Wrapper";
import BodyWraper from "../components/BodyWrapper";
import Greeting from "../components/Greeting";
import FooterDiv from "../components/Footer";
import { Button } from "react-materialize";
import axios from "axios";

class PasswordReset extends Component {

    state = {
        username: "",
        password: "",
        phone: "",
        firstName: "Friend",
        lastName: "",
        zipcode: "",
        city: "",
        st: "",
        aboutme: "",
        profilepic: "",
        coverphoto: "",
    }

    componentDidMount() {
        axios.get("/auth/reset/").then((response) => {
            // console.log(response);

            // if (response.data) {
            //   this.setState({
            //     _id: response.data._id,
            //     username: response.data.username,
            //     phone: response.data.phone,
            //     firstName: response.data.firstName,
            //     lastName: response.data.lastName,
            //     zipcode: response.data.zipcode,
            //     city: response.data.city,
            //     st: response.data.st,
            //     aboutme: response.data.aboutme,
            //     profilepic: response.data.profilepic,
            //     coverphoto: response.data.coverphoto,
            //     redirectTo: null,
            //     loggedIn: true
            //   })
            // }
          })
    }

    render() {
        return (
            <Wrapper>
                <Jumbotron>
                    <Navbar user={this.props.user} onChange={this.props.onChange} handleLogin={this.props.handleLogin} handleSignup={this.props.handleSignup} handleLogout={this.props.handleLogout} />
                    <Greeting lineOne={`Hello there, ${this.props.user.firstName}`} lineTwo="Reset Your Password Below:" />
                </Jumbotron>
                <BodyWraper>
                    <form>
                        <div className="input-field">
                            <label htmlFor="reset-auth-email">Email</label>
                            <input id="reset-auth-email" value={this.props.user.username} onChange={this.props.onChange} name="username" type="email"></input>
                        </div>
                        <div className="input-field">
                            <label htmlFor="reset-auth-password">Password</label>
                            <input id="reset-auth-password" value={this.props.user.password} onChange={this.props.onChange} name="password" type="password"></input>
                        </div>
                        <Button className="auth-button" onClick={this.props.handleLogin}>Reset</Button><br /><br />
                    </form>
                </BodyWraper>
                <FooterDiv />
            </Wrapper>
        );
    }
}

export default PasswordReset;
