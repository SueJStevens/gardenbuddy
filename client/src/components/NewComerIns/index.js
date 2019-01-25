import React from "react";
import "./style.css";
import { Button, Icon } from "react-materialize";

function NewComerIns(props) {
    return(
        <div className="instruction">
            <h3>New here? Lost? No worries.</h3>
            <h5>Here are some steps to get you started...</h5><Button waves="light" className="blue-grey darken-2"><Icon left>arrow_forward</Icon>Start</Button>

        </div>
    )
}

export default NewComerIns;