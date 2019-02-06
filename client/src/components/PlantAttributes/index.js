import React from "react";

function PlantAttributes(props) {
    return(
        <p><b>{props.attribute}:</b> {props.value}</p>
    )
}

export default PlantAttributes;