import React from "react";
import "./style.css";

function Jumbotron(props) {
    return (
        <wrapper className="wrapper">
            <div className="bg-image">
                {props.children}
            </div>
        </wrapper>
            );
        }
        
export default Jumbotron;