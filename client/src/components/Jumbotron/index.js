import React from "react";
import "./style.css";
import Greeting from "../Greeting";

function Jumbotron(props) {
    return (
        <wrapper className="wrapper">
            <div className="bg-image">
                {props.children}
                    {/* <img class="landing-leaf" alt="leaf" src={require('../../images/green_leaf.png')} /> */}
                <Greeting />
            </div>
        </wrapper>
            );
        }
        
export default Jumbotron;