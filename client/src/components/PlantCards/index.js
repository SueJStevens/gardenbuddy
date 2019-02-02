import React from "react";
import {Card, CardTitle} from "react-materialize";
import {Link} from "react-router-dom";

function PlantCard(props) {
    return(
        <Card className='medium'
            header={<CardTitle image={props.photo}>{props.commonName}</CardTitle>}
            actions={<Link to="/plantdetail">Details</Link>}>
            Zone: {props.zones}<br/>
            Variety: {props.variety}<br/>
            {/* ID: {props.id} */}
            Category: {props.category}
        </Card>
    )
}

export default PlantCard;