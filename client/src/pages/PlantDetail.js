import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavBar from "../components/Navbar";
import { Row } from "react-materialize";
import PlantHeader from "../components/PlantHeader";
import PlantInformation from "../components/PlantInformation";

export default class PlantDetail extends Component {

    render() {
        return (
            <div>
                <NavBar />
                {/* we will want plant details, growing calendar, and Companion planting details */}
                <Row>
                    <PlantHeader />
                    <PlantInformation />
                </Row>
            </div>
        )
    }
}
