import React from "react";
import "./style.css";

// By extending the React.Component class, Counter inherits functionality from it
function SideNav(props) {

    // The render method returns the JSX that should be rendered
    return (
        //use bootstrap to create a navbar
        <SideNav
            trigger={<Button>SIDE NAV DEMO</Button>}
            options={{ closeOnClick: true, edge: 'right' }}
        >
            <SideNavItem userView
                user={{
                    background: 'img/office.jpg',
                    image: 'img/yuna.jpg',
                    name: 'John',
                    email: 'jdandturk@gmail.com'
                }}
            />
            <SideNavItem href='#!icon' icon='cloud'>Profile</SideNavItem>
            <SideNavItem href='#!second'>Virtual Garden</SideNavItem>
            <SideNavItem divider />
            <SideNavItem waves href='#!third'>Gallery</SideNavItem>
            <SideNavItem href='#!icon'>Notifications</SideNavItem>
        </SideNav>
    );
};

export default SideNav;


