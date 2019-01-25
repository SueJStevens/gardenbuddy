import React from "react";
import "./style.css";
import FlowerIcon from "../FlowerIcon";
import LeafIcon from "../LeafIcon";
import FruitIcon from "../FruitIcon";
import SearchCategoryBar from "../SearchCategoryBar";
import { Carousel } from "react-materialize";
import Intro from "../Intro";
import SearchBar from "../SearchBar";
import NewComerIns from "../NewComerIns";

function BodyContent(props) {
    return(
        <div className="icon-div">
            <Intro />
            <NewComerIns />
            <SearchBar />

            {/* <p id="step-1"><b>Step 1:</b> Choose your category: </p>
            <div className="row">
                <div className="col s2 hoverable plant-icon">
                    <FlowerIcon />
                </div>
                <div className="col s1"></div>

                <div className="col s2 hoverable plant-icon">
                    <LeafIcon />
                </div>
                <div className="col s1"></div>

                <div className="col s2 hoverable plant-icon">
                    <FruitIcon />
                </div>
            </div>
            <p id="step-2"><b>Step 2:</b> Enter your zip code to find out suitable plants to grow: </p>
            <SearchCategoryBar />
            <p id="result"><b>Checkout them out here!</b></p>
            <Carousel images={[
                'https://lorempixel.com/250/250/nature/1',
                'https://lorempixel.com/250/250/nature/2',
                'https://lorempixel.com/250/250/nature/3',
                'https://lorempixel.com/250/250/nature/4',
                'https://lorempixel.com/250/250/nature/5'
            ]} /> */}
        </div>
    );
}

export default BodyContent;