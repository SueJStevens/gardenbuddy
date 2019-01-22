import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./style.css";
import ProfileSelector from "../ProfileSelector";
import ProfileContent from "../ProfileContent";

// By extending the React.Component class, Counter inherits functionality from it
class ProfileBody extends Component {

    state = {

    }

    activeComponent = value => {
        // var removeActive = document.getElementById("profile-selection").childNodes;

        var elems = document.querySelectorAll(".profile-selector");

        [].forEach.call(elems, function(el) {
        el.classList.remove("active");
});

        var selection = document.getElementById(value);
        selection.classList.add("active");

        console.log(value);
    }


    // The render method returns the JSX that should be rendered
render () {
    
    return (
        <wrapper className="container profile-content">
            <ProfileSelector activeComponent={this.activeComponent}/>
            <ProfileContent />
        </wrapper>
    );
}
};

export default ProfileBody;


