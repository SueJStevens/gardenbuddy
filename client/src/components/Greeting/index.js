import React from "react";
import "./style.css";

function Greeting(props) {
    return(
        <div className="greeting-text">
            <p className="greeting">{props.lineOne}</p>
            <p className="greeting2">{props.lineTwo}</p>
        </div>
    )
}

export default Greeting;