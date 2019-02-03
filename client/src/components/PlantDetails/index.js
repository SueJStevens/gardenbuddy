import React from 'react';
import { withRouter } from 'react-router-dom';
import "./style.css";
import { Collection, CollectionItem, Collapsible, CollapsibleItem } from "react-materialize";
import API from "../../utils/API";
import PlantAttributes from "../PlantAttributes";

class PlantDetails extends React.Component{
    state = {
        item: "",
        plantAttributes: []
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
        this.setPlantAttributes();
    }

    setPlantAttributes() {
        let attributes = Object.keys(this.state.item.plantAttributes);
        let values = Object.values(this.state.item.plantAttributes);

        let combined = [];
        for(var i = 0; i < attributes.length; i++) {
            let combinedKeyAndValue = {
                key: attributes[i],
                value: values[i]
            }
            combined.push(combinedKeyAndValue);
        }

        this.setState({plantAttributes: combined});
    }

    render() {
        return (
            <Collection className="plant-option">
                <CollectionItem><b>Plant Categories:</b>  {this.state.item.plantCategories}</CollectionItem>
                <CollectionItem><b>Plant Class:</b>  {this.state.item.plantClass}</CollectionItem>
                <CollectionItem><b>Common Name:</b>  {this.state.item.commonName}</CollectionItem>
                <CollectionItem><b>Variety:</b>  {this.state.item.variety}</CollectionItem>
                <CollectionItem><b>Zone:</b>  {this.state.item.zone}</CollectionItem>
                <CollectionItem><b>Zones:</b>  {this.state.item.zones}</CollectionItem>
                <Collapsible className="plant-attributes">
                    <CollapsibleItem header='Plant Attributes:' className="plant-attributes" icon={<i className="fas fa-chevron-down more-attributes"></i>}>
                        <CollectionItem>  
                            {this.state.plantAttributes.map((attribute) => (
                                    <PlantAttributes 
                                        attribute={attribute.key}
                                        value={attribute.value}
                                    />
                            ))}
                        </CollectionItem>
                    </CollapsibleItem>
                </Collapsible>
            </Collection>
        )
    }
}

export default withRouter(PlantDetails);