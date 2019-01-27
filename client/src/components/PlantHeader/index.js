import React from 'react'
import "./style.css";
import { Card, CardTitle, Col, Collection, CollectionItem } from "react-materialize";


function PlantHeader(props) {
    return (
            <Col l={4} m={3} s={12}>
                <Card className='plant-head'
                    header={<CardTitle image='https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/tomato_health_benefits_slideshow/493ss_thinkstock_rf_tomatoes_ripening_on_the_vine.jpg'>Tomato</CardTitle>}
                    actions={[<a href='#'>This is a Link</a>]}>
                    <Collection className="basic-plant-details">
                        <CollectionItem>Common Name:</CollectionItem>
                        <CollectionItem>Scientific Name:</CollectionItem>
                        <CollectionItem>Zone: </CollectionItem>
                    </Collection>
                </Card>
            </Col>
    )
}

export default PlantHeader;

