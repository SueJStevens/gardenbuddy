import React from 'react';
import "./style.css";
import { Collection, CollectionItem, Collapsible, CollapsibleItem } from "react-materialize";

function PlantDetails(props) {
    return (
        <Collection className="plant-option">
            <CollectionItem>Plant Categories:</CollectionItem>
            <CollectionItem>Plant Class:</CollectionItem>
            <CollectionItem>Common Name:</CollectionItem>
            <CollectionItem>Variety:</CollectionItem>
            <CollectionItem>Zone:</CollectionItem>
            <CollectionItem>Zones:</CollectionItem>
            <Collapsible className="plant-attributes">
                <CollapsibleItem header='Plant Attributes:' className="plant-attributes" icon={<i className="fas fa-chevron-down more-attributes"></i>}>
                    <CollectionItem>Sun:</CollectionItem>
                    <CollectionItem>Height:</CollectionItem>
                    <CollectionItem>Planting Time:</CollectionItem>
                    <CollectionItem>Thin:</CollectionItem>
                    <CollectionItem>Leaf Texture:</CollectionItem>
                    <CollectionItem>Fruit Size:</CollectionItem>
                    <CollectionItem>Fruit Weight:</CollectionItem>
                    <CollectionItem>Fruit Bearing:</CollectionItem>
                    <CollectionItem>Type:</CollectionItem>
                    <CollectionItem>Spread:</CollectionItem>
                    <CollectionItem>Sow Method:</CollectionItem>
                    <CollectionItem>Sow Time:</CollectionItem>
                    <CollectionItem>Life Cycle:</CollectionItem>
                    <CollectionItem>Soil PH:</CollectionItem>
                    <CollectionItem>Food Use:</CollectionItem>
                    <CollectionItem>Growth Habit:</CollectionItem>
                    <CollectionItem>Genus:</CollectionItem>
                    <CollectionItem>Additional Uses:</CollectionItem>
                </CollapsibleItem>
            </Collapsible>
        </Collection>
    )
}

export default PlantDetails;