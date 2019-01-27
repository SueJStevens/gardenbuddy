import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavbarProfile from "../components/Navbar-profile";
import { Row } from "react-materialize";
import PlantHeader from "../components/PlantHeader";
import PlantInformation from "../components/PlantInformation";

export default class PlantDetail extends Component {

    render() {
        return (
            <div>
                <NavbarProfile />
                {/* we will want plant details, growing calendar, and Companion planting details */}
                <Row>
                    <PlantHeader />
                    <PlantInformation className="plant-detail-body" />
                </Row>
            </div>
        )
    }
}
