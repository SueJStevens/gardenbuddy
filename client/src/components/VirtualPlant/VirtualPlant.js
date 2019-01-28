import React from "react";
import{Card, CardTitle, Button} from "react-materialize";
import "./VirtualPlant.css";

const moment = require('moment');

let warningStyle = {
  color: 'darkorange',
  fontWeight:'bold'
}

const PlantInfo = (plantName, lastWatered, daysOverdue, wateringFrequency, handleWateringDone) => {

  if(daysOverdue > 0) {

    let dayOrDays = (daysOverdue > 1 ? "days" : "day");

    return(
      <div>
        <p style={warningStyle}>Last watered : {moment(lastWatered).format("ddd MMM Do")}</p>
        <p style={warningStyle}>Watering overdue by {daysOverdue} {dayOrDays}</p>
        <Button onClick={ () => handleWateringDone(plantName) }>
          <i class="fas fa-tint"></i>done watering
        </Button>
      </div>
    )
  } else {
    let nextWatering = moment(lastWatered).add(wateringFrequency, 'days');
    //console.log(nextWatering);
    return(
      <div>
         <p>Last watered : {moment(lastWatered).format("ddd MMM Do")} </p>
         <p>Next watering due on : {nextWatering.format("ddd MMM Do")}</p>
      </div>
    )
  }
}

/**
 * This is the VirtualPlant component. It represents
 * a virtual plant in the user's virtual garden.
 * 
 * It is essentially a Materialize Card.
 * 
 * We use the 'reveal' attribute to reveal additional info
 * on the plant - e.g. when the next watering is due, and
 * if watering is overdue.
 * 
 * @param {*} props 
 *            
 * props.name : name of the virtual plant 
 * props.image : image of the virtual plant
 * props.lastWatered : last time this plant was watered
 * props.wateringDue : boolean indicating that 
 *                     its time to water this plant
 */

const VirtualPlant = props => {

  let nextWatering = moment(props.lastWatered).add(props.wateringFrequency, 'days');

  let { plantImage, plantName, lastWatered, daysOverdue, wateringFrequency, handleWateringDone } = props;

  return(
    <Card className='small'
      header={<CardTitle reveal image={plantImage} waves='light'/>}

      reveal={PlantInfo(plantName, lastWatered, daysOverdue, wateringFrequency, handleWateringDone)}

      title={daysOverdue > 0 ? 
               <span style={warningStyle}>{plantName}</span>
              :<b>{plantName}</b>}
    >
      {/* If watering is overdue, display a warning message under card image.
          Otherwise display the next watering date */}
      {daysOverdue > 0 ? 
        <p style={warningStyle}>
          {/*<i class="fas fa-exclamation-triangle" style={warningStyle}></i>*/}
          Watering overdue
        </p> 
        : 
        <p>Next watering due on:
          <br></br> 
          <b>{nextWatering.format("ddd MMM Do")}</b>
        </p>
      }

   </Card>
  )
}

export default VirtualPlant;
