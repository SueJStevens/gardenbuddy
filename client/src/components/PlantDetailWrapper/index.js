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
            {/* we will want plant details, growing calendar, and Companion planting details */}
            <Row>
                <PlantHeader />
                <PlantInformation/>
            </Row>
        </div>
    )
}

export default PlantDetailWrapper

