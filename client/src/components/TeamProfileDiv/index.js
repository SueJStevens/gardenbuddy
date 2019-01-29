import React from "react";
import "./style.css";
import { Row, Col } from "react-materialize";
import TeamProfileCard from "../TeamProfileCard";

function TeamProfileDiv(props) {
    return(
        <Row>
            <Col s={3} className="teammates"><TeamProfileCard /></Col>
        </Row>
    )
}

export default TeamProfileDiv;