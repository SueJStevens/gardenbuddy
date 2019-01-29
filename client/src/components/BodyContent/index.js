import React from "react";
import "./style.css";
import FlowerIcon from "../FlowerIcon";
import LeafIcon from "../LeafIcon";
import FruitIcon from "../FruitIcon";
import { Carousel } from "react-materialize";
import Intro from "../Intro";
import SearchBar from "../SearchBar";
import NewComerIns from "../NewComerIns";

function BodyContent(props) {
    return(
        <div className="icon-div">
            <Intro />
            <NewComerIns />
            {/* <SearchBar /> */}
        </div>
    );
}

export default BodyContent;