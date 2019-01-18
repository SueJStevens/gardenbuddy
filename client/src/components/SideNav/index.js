import React from "react";
// import "./style.css";
import { SideNav, SideNavItem} from "react-materialize";

// By extending the React.Component class, Counter inherits functionality from it
function SideNavBar(props) {

    // The render method returns the JSX that should be rendered
    return (
        //use bootstrap to create a navbar
        <SideNav
        trigger={<span className="user-account-button"><i class="fas fa-bars"></i></span>}
        options={{ closeOnClick: true, edge: 'right' }}
        >
            <SideNavItem userView
                user={{
                    background: 'https://via.placeholder.com/500',
                    image: 'https://via.placeholder.com/300/000000',
                    name: 'Test User',
                    email: 'test@gmail.com'
                }}
            />
            <SideNavItem href='#!icon'><i class="fas fa-user"></i>Profile</SideNavItem>
            <SideNavItem divider />
            <SideNavItem href='#!second'><i class="fas fa-leaf"></i>Virtual Garden</SideNavItem>
            <SideNavItem waves href='#!third'><i class="fas fa-images"></i>Gallery</SideNavItem>
            <SideNavItem href='#!icon'><i class="fas fa-bell"></i>Notifications</SideNavItem>
        </SideNav>
    );
};

export default SideNavBar;


