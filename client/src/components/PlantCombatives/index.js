import React from 'react'
import VirtualPlant from "../VirtualPlant";
import { Row, Col } from "react-materialize";

function PlantCombatives(props) {
    return (
        <Row>
                <Col s={4}>
                    <VirtualPlant />
                </Col>
                <Col s={4}>
                    <VirtualPlant />
                </Col>
                <Col s={4}>
                    <VirtualPlant />
                </Col>
        </Row>
    )
}

export default PlantCombatives;

