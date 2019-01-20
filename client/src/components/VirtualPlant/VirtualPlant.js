import React from "react";
import{Card, CardTitle, Button} from "react-materialize";

import "./VirtualPlant.css";

/**
 * This is the VirtualPlant component. It represents
 * a virtual plant in the user's virtual garden.
 * 
 * It is essentially a Materialize Card.
 * 
 * @param {*} props 
 *            
 * props.name : name of the virtual plant 
 * props.image : image of the virtual plant
 * props.lastWatered : last time this plant was watered
 * props.wateringDue : boolean indicating that 
 *                     its time to water this plant
 */

const VirtualPlant = props => (
  <Card className='small hoverable'
    header={<CardTitle image={props.image}></CardTitle>}>
    
    {/* The plant name */}
    <b>{props.name}</b>

    <p>Last Watered : </p>

  </Card>
);

export default VirtualPlant;
