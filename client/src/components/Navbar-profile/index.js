import React from "react";
import {Link} from "react-router-dom";
import "./style.css";
import { Navbar, NavItem } from "react-materialize";
import SideNavBar from "../SideNav";
import Login from "../Login";
import SignUp from "../SignUp";


// By extending the React.Component class, Counter inherits functionality from it
function NavbarProfile(props) {

    // The render method returns the JSX that should be rendered
    return (
        <wrapper className="prof-nav-wrapper">
            {/* //use bootstrap to create a navbar */}
            <div className="prof-nav-margin">
                <Navbar className="top-nav brand-logo blue-grey darken-2" brand={<Link to="/" className="brand-logo">GardenBuddy</Link>} right>
                    <NavItem>Flowers</NavItem>
                    <NavItem>Vegetables</NavItem>
                    <NavItem>Herbs</NavItem>
                    <NavItem>Fruits</NavItem>
                    <NavItem className="amber darken-1" style={ {fontWeight: "bold"} }><Link to="/teamprofile">Our Team</Link></NavItem>
                    {/* <NavItem className="amber"><Login /></NavItem>
                    <NavItem><SignUp /></NavItem> */}
                    <NavItem><SideNavBar /></NavItem>
                </Navbar>
            </div>
        </wrapper>
    );
};

export default NavbarProfile;


