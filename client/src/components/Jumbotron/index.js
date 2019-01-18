import React from "react";
import "./style.css";

function Jumbotron(props) {
    return (
        <div className="bg-image">
            {props.children}
            <img id="image" alt="chloe" src={require('../../images/flowers.jpg')} />
        </div>
    );
}

export default Jumbotron;