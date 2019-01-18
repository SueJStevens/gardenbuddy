import React from "react";
import "./style.css";

function BodyWrapper(props) {
    return(
        <div className="bodyWrapper">{props.children}</div>
    );
}

export default BodyWrapper;