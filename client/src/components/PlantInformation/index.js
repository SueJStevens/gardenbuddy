import React from 'react'
import "./style.css";
import { Col, Collapsible, CollapsibleItem } from "react-materialize";
import PlantDetails from "../PlantDetails";
import PlantCompanions from "../PlantCompanions";
import GrowingCalendar from "../GrowingCalendar";

function PlantInformation(props) {
    return (
            <Col l={8} m={9} s={12}>
                <Collapsible popout defaultActiveKey={0} accordion="false">
                    <CollapsibleItem className="plant-detail-option" header='Plant Details' icon={<i class="fas fa-info-circle"></i>}>
                        <PlantDetails />
                    </CollapsibleItem>
                    <CollapsibleItem header='Growing Calendar' icon={<i class="far fa-calendar-alt"></i>}>
                        <GrowingCalendar />
                    </CollapsibleItem>
                    <CollapsibleItem header='Plant Companions' icon={<i class="fab fa-pagelines"></i>}>
                        <PlantCompanions />
                    </CollapsibleItem>
                </Collapsible>
            </Col>
    )
}

export default PlantInformation;

