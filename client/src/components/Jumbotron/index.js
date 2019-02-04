import React from "react";
import "./style.css";
import Wrapper from "../Wrapper";

function Jumbotron(props) {
    return (
        <Wrapper className="wrapper">
            <div className="bg-image">
                {props.children}
            </div>
        </Wrapper>
            );
        }
        
export default Jumbotron;