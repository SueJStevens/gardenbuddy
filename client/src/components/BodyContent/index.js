import React from "react";
import "./style.css";
import Intro from "../Intro";
import NewComerIns from "../NewComerIns";

function BodyContent(props) {
    return(
        <div className="icon-div">
            <Intro />
            <NewComerIns />
        </div>
    );
}

export default BodyContent;