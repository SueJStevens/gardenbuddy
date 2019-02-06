import React from 'react';
import { withRouter } from "react-router-dom";
import "./style.css";
import { Card, CardTitle, Col, Collection, CollectionItem } from "react-materialize";
import API from "../../utils/API";

class PlantHeader extends React.Component {
    
    state = {
        item: []
    };

    componentDidMount() {
        console.log(this.props.location.state.id);
        let id = this.props.location.state.id;
        API.getAPlant(id)
            .then((res) => this.setItem(res.data))
            .catch((err) => console.log(err))
    }

    setItem(data) {
        this.setState({ item: data });
    }

    render() {
        return (
            <Col l={3} m={4} s={12} className="offset-s1 offset-m1 offset-l1">
                <Card className='plant-head'
                    header={<CardTitle image={this.state.item.photoURL}>{this.state.item.commonName}</CardTitle>}>
                    {/* I think the info below is redundant */}
                    <Collection className="basic-plant-details">
                        <CollectionItem>Common Name: {this.state.item.commonName}</CollectionItem>
                        <CollectionItem>Variety: {this.state.item.variety}</CollectionItem>
                        <CollectionItem>Zone: {this.state.item.zone}</CollectionItem>
                    </Collection>
                </Card>
            </Col>
        )
    }
}

export default withRouter(PlantHeader);

