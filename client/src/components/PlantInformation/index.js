import React from 'react'
import "./style.css";
import $ from 'jquery';
import { Col, Collapsible, CollapsibleItem } from "react-materialize";
import PlantDetails from "../PlantDetails";
import PlantCompanions from "../PlantCompanions";
import GrowingCalendar from "../GrowingCalendar";
import PlantCombatives from "../PlantCombatives";
import 'fullcalendar';
import 'fullcalendar-scheduler';
import "fullcalendar-reactwrapper";

function PlantInformation(props) {
    return (
            <Col l={8} m={9} s={12}>
                <Collapsible popout defaultActiveKey={0} accordion="false">
                    <CollapsibleItem className="plant-detail-option" header='Plant Details' icon={<i class="fas fa-info-circle"></i>}>
                        <PlantDetails />
                    </CollapsibleItem>
                    <CollapsibleItem className="plant-detail-option" onClick={() => {$('#calendar').fullCalendar('render');}} header='Growing Calendar' icon={<i class="far fa-calendar-alt"></i>}>
                        <GrowingCalendar />
                    </CollapsibleItem>
                    <CollapsibleItem className="plant-detail-option" header='Companion Plants' icon={<i class="fab fa-pagelines"></i>}>
                        <PlantCompanions />
                    </CollapsibleItem>
                    <CollapsibleItem className="plant-detail-option" header='Combative Plants' icon={<i class="fas fa-skull-crossbones"></i>}>
                        <PlantCombatives />
                    </CollapsibleItem>
                </Collapsible>
            </Col>
    )
}

export default PlantInformation;

