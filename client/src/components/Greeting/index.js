import React from "react";
import "./style.css";

function Greeting(props) {
    return(
        <div className="greeting-text">
            <p className="greeting">Hello,</p>
            <p className="greeting2">Welcome to GardenBuddy!</p>
        </div>
    )
}

export default Greeting;