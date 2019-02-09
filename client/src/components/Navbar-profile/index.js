import React from "react";
import {Link} from "react-router-dom";
import "./style.css";
import { Navbar, NavItem, Dropdown, Button } from "react-materialize";
import SideNavBar from "../SideNav";


// By extending the React.Component class, Counter inherits functionality from it
function NavbarProfile(props) {

    // The render method returns the JSX that should be rendered
    return (
        <wrapper className="prof-nav-wrapper">
            {/* //use bootstrap to create a navbar */}
            <div className="prof-nav-margin">
                <Navbar className="top-nav brand-logo blue-grey darken-2" brand={<Link to="/landing" className="brand-logo">GardenBuddy</Link>} right>
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
                    <NavItem className="amber darken-1" style={ {fontWeight: "bold"} }><Link to="/teamprofile">Our Team</Link></NavItem>
                    {/* <NavItem className="amber"><Login /></NavItem>
                    <NavItem><SignUp /></NavItem> */}
                    <NavItem>
                        <SideNavBar 
                            username={props.user.username}
                            password={props.user.password}
                            phone={props.user.phone}
                            firstName={props.user.firstName}
                            lastName={props.user.lastName}
                            zipcode={props.user.zipcode}
                            city={props.user.city}
                            st={props.user.st}
                            aboutme={props.user.aboutme}
                            profilepic={props.user.profilepic}
                            coverphoto={props.user.coverphoto}
                            logout={props.logout}
                        />
                    </NavItem>
                </Navbar>
            </div>
        </wrapper>
    );
};

export default NavbarProfile;


