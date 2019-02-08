import React, { Component } from "react";
import NavbarProfile from "../components/Navbar-profile";
import ProfileHeader from "../components/ProfileHeader";
import ProfileBody from "../components/ProfileBody";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";


// By extending the React.Component class, Counter inherits functionality from it
class Profile extends Component {

    state = {
        gardenSize: 0
    }

    constructor(props) {
        super(props);
        let userName = this.props.user.username;
        API.getVirtualGarden(userName).then((res) => {

            // If the user has no virtual plants in their virtual garden yet,
            // set 'my_plants' to an empty array.
            // Else, sort the virtual garden so that the plants whose watering
            // is overdue are displayed first
            // console.log("Got virtual garden length " + res.data.length)
            this.setState({gardenSize: res.data.length})
            console.log(this.state.gardenSize);

        });
    }

    render() {
        
        // The render method returns the JSX that should be rendered
        return (
            // use bootstrap to create a navbar
            <Wrapper>
                <NavbarProfile />
                <ProfileHeader user={this.props.user} gardenSize={this.state.gardenSize} />
                <ProfileBody user={this.props.user} gardenSize={this.state.gardenSize}/>
            </Wrapper>
        );

    }
};


export default Profile;


