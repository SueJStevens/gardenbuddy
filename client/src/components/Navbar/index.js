import React from "react";
import {Link} from "react-router-dom";
import "./style.css";
import SearchBar from "../SearchBar";
import { Navbar, NavItem } from "react-materialize";
import SideNavBar from "../SideNav";
import Login from "../Login";


// By extending the React.Component class, Counter inherits functionality from it
function NavBar(props) {

    // The render method returns the JSX that should be rendered
    return (
        <wrapper className="nav-wrapper">
            {/* //use bootstrap to create a navbar */}
            <div className="nav-margin">
                <Navbar className="top-nav brand-logo transparent" brand={<Link to="/" className="brand-logo">GardenBuddy</Link>} right>
                    {/* <NavItem onClick={() => console.log('test click')}>Getting started</NavItem> */}
                    {/* <NavItem>Account</NavItem> */}
                    <NavItem><SearchBar /></NavItem>
                    <NavItem href='components.html'><Login /></NavItem>
                    <NavItem><SideNavBar /></NavItem>
                </Navbar>
            </div>
        </wrapper>
    );
};

export default NavBar;


