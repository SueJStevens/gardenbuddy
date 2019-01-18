import React from "react";
import "./style.css";

function SearchBar(props) {
    return(
        <div className="searchField">
            <div className="input-field">
                <input placeholder="Enter your zipcode to see what plants you could grow in your area..." id="first_name" type="text" className="validate" />
                <a className="waves-effect waves-light btn dr teal lighten-1">search</a>
                {/* <label for="first_name">Where are you?</label> */}
            </div>
        </div>
    );
}

export default SearchBar;