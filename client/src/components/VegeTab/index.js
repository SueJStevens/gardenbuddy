import React from "react";
import "./style.css";
import SearchCategoryBar from "../SearchCategoryBar";
import { Carousel } from "react-materialize";

function VegeTab(props) {
    return (
        <div className="vegeTabContent">
            <p id="step-2"><b>Enter your zip code to find out suitable Vegetables to grow: </b></p>
            <SearchCategoryBar />
            <p id="result"><b>Checkout them out here!</b></p>
            <Carousel images={[
                'https://lorempixel.com/250/250/nature/1',
                'https://lorempixel.com/250/250/nature/2',
                'https://lorempixel.com/250/250/nature/3',
                'https://lorempixel.com/250/250/nature/4',
                'https://lorempixel.com/250/250/nature/5'
            ]} />
        </div>
    )
}

export default VegeTab;