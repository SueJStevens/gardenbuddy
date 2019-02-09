import React from "react";
import {Card, CardTitle } from "react-materialize";
import {Link} from "react-router-dom";

function PlantCard(props) {
    return(
        <Card className='medium'
            header={<CardTitle image={props.photo}>{props.commonName}</CardTitle>}
            actions={<Link to={{pathname: `/plantdetail/${props.commonName.toLowerCase()}`, state: {id: props.id, commonName: props.commonName, searchedZone: props.searchedZone}}}>Detail</Link>}>
            Zone: {props.zones}<br/>
            Variety: {props.variety}<br/>
            Category: {props.category}
        </Card>
    )
}

export default PlantCard;