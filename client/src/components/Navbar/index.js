import React from "react";
// import "./style.css";
import SearchBar from "../SearchBar";
import { Navbar, NavItem } from "react-materialize";
import SideNavBar from "../SideNav";

// By extending the React.Component class, Counter inherits functionality from it
function NavBar(props) {

    // The render method returns the JSX that should be rendered
    return (
        <wrapper>
            {/* //use bootstrap to create a navbar */}
            <Navbar class="top-nav" brand='logo' right>
                {/* <NavItem onClick={() => console.log('test click')}>Getting started</NavItem> */}
                {/* <NavItem>Account</NavItem> */}
                <NavItem><SearchBar /></NavItem>
                <NavItem href='components.html'>Login</NavItem>
                <NavItem><SideNavBar /></NavItem>
            </Navbar>
        </wrapper>
    );
};

export default NavBar;


