import React, { Component } from 'react';
import PlantDetailWrapper from "../components/PlantDetailWrapper";
import axios from "axios";
import $ from "jquery";

export default class PlantDetail extends Component {

    logout = (event) => {
        event.preventDefault();
        axios.get("/auth/logout").then((response) => {
            console.log(response);
        });
    }

    componentDidMount() {
        $(".modal-overlay").toggle("modal-close");
    }

    render() {
        return (
            <div>
                <PlantDetailWrapper user={this.props.user} logout={this.logout}/>
            </div>
        )
    }
}
