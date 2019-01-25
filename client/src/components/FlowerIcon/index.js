import React from "react";
import "./style.css";

function FlowerIcon(props) {
    return(
        <div className="flower-div">
            <img alt="Flower-icon" id="flower-icon" src={require("../../images/flower-icon2.png")} />
            {/* <a className="waves-effect waves-light btn-large flower-btn">Flowers</a> */}
        </div>
    );
}

export default FlowerIcon;