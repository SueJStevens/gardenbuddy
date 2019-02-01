import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./style.css";
import PropTypes from 'prop-types';
import { Navbar, NavItem, Dropdown, Button } from "react-materialize";
import SideNavBar from "../SideNav";
import Login from "../Login";
import SignUp from "../SignUp";
import axios from 'axios'


// By extending the React.Component class, Counter inherits functionality from it
class NavBar extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            phone: "",
            firstName: "",
            lastName: "",
            zipcode: "",
            city: "",
            st: "",
            aboutme: "",
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        // console.log("changed");
        console.log(this.state);
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        // TODO - validate!
        axios.post('/auth/signup', {
            password: this.state.password,
            email: this.state.email,
            phone: this.state.phone,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            zipcode: this.state.zipcode,
            city: this.state.city,
            st: this.state.st,
            aboutme: this.state.aboutme

        })
            .then(response => {
                console.log(response)
                if (!response.data.errmsg) {
                    console.log('youre good')
                    this.setState({
                        redirectTo: '/profile'
                    })
                } else {
                    console.log('duplicate')
                }
            })
    }

    render() {

        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        }
        // The render method returns the JSX that should be rendered
        return (
            <wrapper className="nav-wrapper">
                {/* //use bootstrap to create a navbar */}
                <div className="nav-margin">
                    <Navbar className="top-nav brand-logo transparent" brand={<Link to="/" className="brand-logo">GardenBuddy</Link>} right>
                        {/* <NavItem onClick={() => console.log('test click')}>Getting started</NavItem> */}
                        {/* <NavItem>Account</NavItem> */}

                        <NavItem>
                            <Dropdown 
                                options={{hover: true}}
                                trigger={<Button className="transparent">Departments</Button>}>
                                    <Link to="/flowers"><NavItem>Flowers</NavItem></Link>
                                    <NavItem divider />
                                    <Link to="/fruits"><NavItem>Fruits</NavItem></Link>
                                    <NavItem divider />
                                    <Link to="/vegetables"><NavItem>Vegetables</NavItem></Link>
                                    <NavItem divider />
                                    <Link to="/herbs"><NavItem>Herbs</NavItem></Link>
                            </Dropdown>
                        </NavItem>

                        <NavItem className="blue-grey darken-3" style={{ fontWeight: "bold" }}><Link to="/teamprofile">Our Team</Link></NavItem>
                        <NavItem className="amber"><Login /></NavItem>
                        <NavItem className="blue-grey darken-4">
                            <SignUp
                                email={this.state.email}
                                password={this.state.password}
                                phone={this.state.phone}
                                firstName={this.state.firstName}
                                lastName={this.state.lastName}
                                zipcode={this.state.zipcode}
                                city={this.state.city}
                                st={this.state.st}
                                aboutme={this.state.aboutme}
                                onChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                            />
                        </NavItem>
                        <NavItem><SideNavBar/></NavItem>
                    </Navbar>
                </div>
            </wrapper>
        );
    };
};

NavBar.contextTypes = {
    router: PropTypes.object.isRequired
};

export default NavBar;


