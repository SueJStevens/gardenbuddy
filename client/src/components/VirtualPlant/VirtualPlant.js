import React from "react";
import { Card, CardTitle, Button } from "react-materialize";
import "./VirtualPlant.css";
import EditPlant from "../VirtualPlantEditModal";

const moment = require('moment');

let warningStyle = {
  color: 'darkorange',
  fontWeight:'bold'
}
let infoStyle = {
  fontWeight:'bold'
}

const PlantInfo = (plantName, lastWatered, daysOverdue, wateringFrequency, handleWateringDone) => {

  let warningMsg = "";

  if (daysOverdue >= 0) {

    if(daysOverdue === 0){
      warningMsg = "Watering due today";
    } else {
      let dayOrDays = (daysOverdue > 1 ? "days" : "day");
      warningMsg = "Watering overdue by " + daysOverdue + " " + dayOrDays;
    }

    return (
      <div>
        <p style={warningStyle}>Last watered : {moment(lastWatered).format("ddd MMM Do")}</p>
        <p style={warningStyle}>{warningMsg}</p>
        <Button className="virtual-plant-button" onClick={() =>  handleWateringDone(plantName)}>
          <i class="fas fa-tint"></i>Water Me
        </Button>
        {/* <Button className="virtual-plant-button">
          <i class="fas fa-pencil-alt"></i>Edit Plant
        </Button> */}
        <EditPlant />
        <Button className="virtual-plant-button">
          <i class="fas fa-camera"></i>Upload Photos
        </Button>
      </div>
    )
  } else {
    let nextWatering = moment(lastWatered).add(wateringFrequency, 'days');
    //console.log(nextWatering);
    return (
      <div>
        <p>Last watered : {moment(lastWatered).format("ddd MMM Do")} </p>
        <p>Next watering due on : {nextWatering.format("ddd MMM Do")}</p>
        <Button className="virtual-plant-button">
          <i class="fas fa-pencil-alt"></i>Edit Plant
        </Button>
        <Button className="virtual-plant-button">
          <i class="fas fa-camera"></i>Upload Photos
        </Button>
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

class VirtualPlant extends React.Component {

  state = {
    isWateringOverdue : false,
    daysOverdue : 0
  }

  constructor(props){
    super(props);
    let { daysOverdue } = props;

    this.state.daysOverdue = daysOverdue;

    if(daysOverdue >= 0){
      this.state.isWateringOverdue = true;
    }
  }

  handleWateringDone = () => {
    let {plantName, wateringCallback} = this.props;
    
    wateringCallback(plantName);
  }

  /**
   * @function: render
   * 
   * Render function for this App.
   */
  render() {

    let { plantImage, plantName, lastWatered, daysOverdue, wateringFrequency } = this.props;

    let nextWatering = moment(lastWatered).add(wateringFrequency, 'days');

    return (
      <Card className='medium'
        header={<CardTitle reveal image={plantImage} waves='light' />}
  
        reveal={PlantInfo(plantName, lastWatered, daysOverdue, wateringFrequency, this.handleWateringDone)}
  
        title={daysOverdue >= 0 ?
          <span style={warningStyle}>{plantName}</span>
          :  <span style={infoStyle}>{plantName}</span>}
      >
        {/* If watering is overdue, display a warning message under card image.
            Otherwise display the next watering date */}
        {daysOverdue >= 0 ?
          <p style={warningStyle}>
            {/*<i class="fas fa-exclamation-triangle" style={warningStyle}></i>*/}
            Watering overdue
            <Button className="virtual-plant-button" onClick={() =>  this.handleWateringDone(plantName)}>
              <i className="fas fa-tint"> </i>Water me
            </Button>
          </p>
          :
          <p>Next watering due on:
            <br></br>
            <b>{nextWatering.format("ddd MMM Do")}</b>
          </p>
        }
      </Card>
    );
  }


}

export default VirtualPlant;
