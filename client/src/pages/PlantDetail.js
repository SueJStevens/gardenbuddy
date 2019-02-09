import React, { Component } from 'react';
import PlantDetailWrapper from "../components/PlantDetailWrapper";
import $ from "jquery";

export default class PlantDetail extends Component {

    componentDidMount() {
        $(".modal-overlay").toggle("modal-close");
    }

    render() {
        return (
            <div>
                <PlantDetailWrapper />
            </div>
        )
    }
}
