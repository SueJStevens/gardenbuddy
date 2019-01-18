import React from "react";
import "./style.css";
import FlowerIcon from "../FlowerIcon";
import LeafIcon from "../LeafIcon";
import FruitIcon from "../FruitIcon";
import SearchCategoryBar from "../SearchCategoryBar";
import { Carousel } from "react-materialize";

function BodyContent(props) {
    return(
        <div className="icon-div">
            <p id="step-1"><b>Step 1:</b> Choose your category: </p>
            <FlowerIcon />
            <LeafIcon />
            <FruitIcon />
            <p id="step-2"><b>Step 2:</b> Enter your zip code to find out suitable plants to grow: </p>
            <SearchCategoryBar />
            <p id="result"><b>Result:</b> Checkout them out! </p>
            <Carousel images={[
                'https://lorempixel.com/250/250/nature/1',
                'https://lorempixel.com/250/250/nature/2',
                'https://lorempixel.com/250/250/nature/3',
                'https://lorempixel.com/250/250/nature/4',
                'https://lorempixel.com/250/250/nature/5'
            ]} />
        </div>
    );
}

export default BodyContent;