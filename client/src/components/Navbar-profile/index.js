import React from "react";
import {Link} from "react-router-dom";
import "./style.css";
import SearchBar from "../SearchBar";
import { Navbar, NavItem } from "react-materialize";
import SideNavBar from "../SideNav";
import Login from "../Login";


// By extending the React.Component class, Counter inherits functionality from it
function NavbarProfile(props) {

    // The render method returns the JSX that should be rendered
    return (
        <wrapper className="prof-nav-wrapper">
            {/* //use bootstrap to create a navbar */}
            <div className="prof-nav-margin">
                <Navbar className="top-nav brand-logo cyan darken-4" brand={<Link to="/" className="brand-logo">GardenBuddy</Link>} right>

                </Navbar>
            </div>
        </wrapper>
    );
};

export default NavbarProfile;


