import React from "react";
import {Link} from "react-router-dom";
import "./style.css";
import { SideNav, SideNavItem} from "react-materialize";

// By extending the React.Component class, Counter inherits functionality from it
function SideNavBar(props) {

    let sideNavFirstName = props.firstName
    let sideNavLastName = props.lastName
    let sideNavProfilePic = props.profilepic
    let sideNavCoverPhoto = props.coverphoto
    let sideNavEmail = props.username

    // The render method returns the JSX that should be rendered
    return (
        //use bootstrap to create a navbar
        <SideNav
        className="side-nav yellow lighten-5"
        trigger={<span className="user-account-button"><i className="fas fa-bars"></i></span>}
        options={{ closeOnClick: true, edge: 'left' }}
        >
            <SideNavItem userView
                user={{
                    background: sideNavCoverPhoto,
                    image: sideNavProfilePic,
                    name: sideNavFirstName + " " + sideNavLastName,
                    email: sideNavEmail
                }}
            />
            <SideNavItem waves className="side-nav-link"><Link to="/profile"><i className="fas fa-user"></i>Profile</Link></SideNavItem>
            <SideNavItem divider />
            <SideNavItem waves className="side-nav-link"><Link className="side-nav-link" to="/profile/virtualgarden"><i className="fas fa-leaf"></i>Virtual Garden</Link></SideNavItem>
            <SideNavItem waves className="side-nav-link"><Link className="side-nav-link" to="/profile/gallery"><i className="fas fa-images"></i>Gallery</Link></SideNavItem>
            <SideNavItem waves className="side-nav-link"><Link className="side-nav-link" to="/profile/notifications"><i className="fas fa-bell"></i>Notifications</Link></SideNavItem>
            <SideNavItem waves className="side-nav-link"><Link className="side-nav-link" to="/auth/logout"><i class="fas fa-sign-out-alt"></i>Logout</Link></SideNavItem>
        </SideNav>
    );
};

export default SideNavBar;


