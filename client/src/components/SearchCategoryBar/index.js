import React from "react";
import "./style.css";

function SearchBar(props) {
    return(
        <div className="searchField">
            <div className="input-field">
                <label for="search-bar">Enter your zipcode to see what plants you could grow in your area...</label><br />
                <input placeholder="Zipcode" id="search-bar" type="text" className="validate search-input" />
                <a className="waves-effect waves-light btn dr teal lighten-1">Search</a>
            </div>
        </div>
    );
}

export default SearchBar;