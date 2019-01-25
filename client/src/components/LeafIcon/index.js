import React from "react";
import "./style.css";

function LeafIcon(props) {
    return(
        <div className="leaf-div">
            <img alt="Leaf-icon" id="leaf-icon" src={require("../../images/leaf-icon2.png")} />
            {/* <a class="waves-effect waves-light btn-large">Plants</a> */}
        </div>
    );
}

export default LeafIcon;