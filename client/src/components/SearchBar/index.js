import React from "react";
import "./style.css";

// By extending the React.Component class, Counter inherits functionality from it
function SearchBar(props) {

    // The render method returns the JSX that should be rendered
    return (
        <div class="nav-wrapper search-bar">
            <form>
                <div class="input-field">
                    <input id="search" type="search" required />
                    <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                    <i class="material-icons">close</i>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
