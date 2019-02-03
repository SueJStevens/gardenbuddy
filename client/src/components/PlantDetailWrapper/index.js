import React from 'react';
import NavbarProfile from "../Navbar-profile";
import "./style.css";
import { Row } from "react-materialize";
import PlantHeader from "../PlantHeader";
import PlantInformation from "../PlantInformation";

function PlantDetailWrapper(props) {
    return (
        <div className="plant-detail-body">
            <NavbarProfile />
            <Row className="plant-detail-body-row">
                <PlantHeader />
                <PlantInformation/>
            </Row>
        </div>
    )
}

export default PlantDetailWrapper

