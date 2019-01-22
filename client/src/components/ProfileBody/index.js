import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./style.css";
import ProfileSelector from "../ProfileSelector";
import ProfileContent from "../ProfileContent";

// By extending the React.Component class, Counter inherits functionality from it
class ProfileBody extends Component {

    activeComponent = value => {

        //grab all elements with the profile-selector class
        var elems = document.querySelectorAll(".profile-selector");

        //for each of those elements, remove the active class and add the color teal class
        [].forEach.call(elems, function (el) {
            el.classList.remove("active");
            el.classList.add("color-teal");
        });

        //grab the element that the user clicked on
        var selection = document.getElementById(value);

        //add the active class and remove the color teal class
        selection.classList.add("active");
        selection.classList.remove("color-teal");
    }


    // The render method returns the JSX that should be rendered
    render() {

        return (
            <wrapper className="container profile-content">
                <ProfileSelector activeComponent={this.activeComponent} />
                <ProfileContent />
            </wrapper>
        );
    }
};

export default ProfileBody;


