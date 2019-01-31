import React from "react";
import "./style.css";

function DepartmentContent(props) {
    return(
        <div className="row">
            {props.children}
        </div>
    )
}

export default DepartmentContent;