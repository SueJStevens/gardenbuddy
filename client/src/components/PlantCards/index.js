import React from "react";

function PlantCard(props) {
    return(
        <div class="col s3">
            <div class="card">
                <div class="card-image">
                    <img alt={props.commonName} src={props.photo} />
                    <span class="card-title">{props.commonName}</span>
                </div>
                <div class="card-content">
                    <p>Zone: {props.zones}</p>
                </div>
                <div class="card-action">
                    <a href={props.plantDetails}>Details</a>
                </div>
            </div>
        </div>
    )
}

export default PlantCard;