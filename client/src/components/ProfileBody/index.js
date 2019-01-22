import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./style.css";
import { Row } from "react-materialize";
import ProfileSelector from "../ProfileSelector";
import ProfileContent from "../ProfileContent";

// By extending the React.Component class, Counter inherits functionality from it
class ProfileBody extends Component {

    activeComponent = value => {

        //grab all elements with the profile-selector class
        var elems = document.querySelectorAll(".profile-selector");

        //for each of those elements, remove the active class
        [].forEach.call(elems, function (el) {
            el.classList.remove("active");
        });

        //grab the element that the user clicked on
        var selection = document.getElementById(value);

        //add the active class
        selection.classList.add("active");
    }


    // The render method returns the JSX that should be rendered
    render() {

        return (
            <Row className="profile-content">
                <wrapper className="container profile-content">
                    <ProfileSelector activeComponent={this.activeComponent} />
                    <ProfileContent />
                </wrapper>
            </Row>
        );
    }
};

export default ProfileBody;


