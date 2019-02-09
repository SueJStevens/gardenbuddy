import React, { Component } from 'react';
import PlantDetailWrapper from "../components/PlantDetailWrapper";
import axios from "axios";

export default class PlantDetail extends Component {

    logout = (event) => {
        event.preventDefault();
        axios.get("/auth/logout").then((response) => {
            console.log(response);
        });
    }

    render() {
        return (
            <div>
                <PlantDetailWrapper user={this.props.user} logout={this.logout}/>
            </div>
        )
    }
}
