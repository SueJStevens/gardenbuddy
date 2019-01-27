import React from "react";
import "./style.css";

function FruitIcon(props) {
    return(
        <div className="fruit-div">
            <img alt="Fruit-icon" id="fruit-icon" src={require("../../images/fruit-icon2.png")} />
            {/* <a class="waves-effect waves-light btn-large">Fruits</a> */}
        </div>
    );
}

export default FruitIcon;