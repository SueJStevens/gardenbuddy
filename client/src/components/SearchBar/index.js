import React from "react";
// import "./style.css";

// By extending the React.Component class, Counter inherits functionality from it
function SearchBar(props) {

    // The render method returns the JSX that should be rendered
    return (
        <form>
            <div className="input-field">
                <input id="search" type="search" required/>
                <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                <i className="material-icons">close</i>
            </div>
        </form>
    );
};

export default SearchBar;
