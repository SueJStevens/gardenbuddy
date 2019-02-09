import React from 'react';
import { withRouter } from 'react-router-dom';
import "./style.css";
import { Collection, CollectionItem } from "react-materialize";
import API from "../../utils/API";
import PlantAttributes from "../PlantAttributes";

class PlantDetails extends React.Component{
    state = {
        item: [],
        plantAttributes: []
    };

    componentDidMount() {
        let id = this.props.location.state.id;
        API.getAPlant(id)
            .then((res) => this.setItem(res.data))
            .catch((err) => console.log(err));
    }

    setItem(data) {
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
                <CollectionItem>
                    {this.state.plantAttributes.map((attribute) => (
                        <PlantAttributes 
                            attribute={attribute.key}
                            value={attribute.value}
                        />
                    ))}
                </CollectionItem>
            </Collection>
        )
    }
}

export default withRouter(PlantDetails);