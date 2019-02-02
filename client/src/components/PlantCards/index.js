import React from "react";
import {Card, CardTitle} from "react-materialize";

function PlantCard(props) {
    return(
        // <div class="col s">
        //     <div class="card">
        //         <div class="card-image">
        //             <img alt={props.commonName} src={props.photo} />
        //             <span class="card-title">{props.commonName}</span>
        //         </div>
        //         <div class="card-content">
        //             <p>Zone: {props.zones}</p>
        //         </div>
        //         <div class="card-action">
        //             <a href={props.plantDetails}>Details</a>
        //         </div>
        //     </div>
        // </div>
        <Card className='medium'
            header={<CardTitle image={props.photo}>{props.commonName}</CardTitle>}
            actions={[<a href={props.plantDetails}>This is a Link</a>]}>
            Zone: {props.zones}<br/>
            Variety: {props.variety}<br/>
            {/* ID: {props.id} */}
            Category: {props.category}
        </Card>
    )
}

export default PlantCard;