import React, { Component } from 'react';
import PlantDetailWrapper from "../components/PlantDetailWrapper";
import axios from "axios";
import $ from "jquery";

export default class PlantDetail extends Component {

    componentDidMount() {
        $(".modal-overlay").toggle("modal-close");
    }

    render() {
        return (
            <div>
                <PlantDetailWrapper user={this.props.user} handleLogout={this.props.handleLogout}/>
            </div>
        )
    }
}
