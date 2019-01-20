import React from "react";
import "./style.css";

function Jumbotron(props) {
    return (
        <wrapper className="wrapper">
            <div className="bg-image">
                {props.children}
                    <img class="landing-leaf" alt="leaf" src={require('../../images/green_leaf.png')} />
                </div>
        </wrapper>
            );
        }
        
export default Jumbotron;