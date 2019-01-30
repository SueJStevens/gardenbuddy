import React from "react";
import "./style.css";

function DepartmentContent(props) {
    return(
        <wrapper>
            {props.children}
        </wrapper>
    )
}

export default DepartmentContent;