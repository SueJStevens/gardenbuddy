import React from "react";
// import "./style.css";
// import SearchBar from "../SearchBar";
import {Navbar, NavItem} from "react-materialize";

// By extending the React.Component class, Counter inherits functionality from it
function TopNav(props) {

    // The render method returns the JSX that should be rendered
    return (
        //use bootstrap to create a navbar
        <Navbar brand='logo' right>
            <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
            <NavItem href='components.html'>Components</NavItem>
            {/* <SearchBar /> */}
        </Navbar>
    );
};

export default TopNav;