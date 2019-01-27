import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavbarProfile from "../components/Navbar-profile";
import { Row } from "react-materialize";
import PlantHeader from "../components/PlantHeader";
import PlantInformation from "../components/PlantInformation";
import PlantDetailWrapper from "../components/PlantDetailWrapper";

export default class PlantDetail extends Component {

    render() {
        return (
            <div>
                <PlantDetailWrapper />
            </div>
        )
    }
}
