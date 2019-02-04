import React from "react";
import "./style.css";

// By extending the React.Component class, Counter inherits functionality from it
function SearchBar(props) {

    // The render method returns the JSX that should be rendered
    return (
            <form className="searchBar">
                <div className="input-field">
                    <i className="material-icons prefix">search</i>
                    <input name={props.name} onChange={props.handleInputChange} id="icon_prefix" type="text" class="validate" />
                    <label for="icon_prefix">Enter zip code</label>
                </div>
            </form>
    );
};

export default SearchBar;
