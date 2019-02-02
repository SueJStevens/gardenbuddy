import React from 'react';
import { withRouter } from 'react-router-dom';
import "./style.css";
import { Collection, CollectionItem, Collapsible, CollapsibleItem } from "react-materialize";
import API from "../../utils/API";


class PlantDetails extends React.Component{
    state = {
        item: ""
    };

    componentDidMount() {
        console.log("david is awesome", this.props.location.state.id);
        let id = this.props.location.state.id;
        API.getAPlant(id)
            .then((res) => this.setItem(res.data))
            .catch((err) => console.log(err));
    }

    setItem(data) {
        console.log(data);
        this.setState({item: data});
    }

    render() {
        return (
            <Collection>
                <CollectionItem>Plant Categories: {this.state.item.plantCategories}</CollectionItem>
                <CollectionItem>Plant Class: {this.state.item.plantClass}</CollectionItem>
                <CollectionItem>Common Name: {this.state.item.commonName}</CollectionItem>
                <CollectionItem>Variety: {this.state.item.variety}</CollectionItem>
                <CollectionItem>Zone: {this.state.item.zone}</CollectionItem>
                <CollectionItem>Zones: {this.state.item.zones}</CollectionItem>
                <Collapsible className="plant-attributes">
                    <CollapsibleItem header='Plant Attributes:' className="plant-attributes" icon={<i className="fas fa-chevron-down more-attributes"></i>}>
                        <CollectionItem>Sun: </CollectionItem>
                        <CollectionItem>Height: </CollectionItem>
                        <CollectionItem>Planting Time: </CollectionItem>
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
}

export default withRouter(PlantDetails);