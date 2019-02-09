import React from "react";
//import sample_plants  from "./sample_plants.json";
import VirtualPlant from "../VirtualPlant";
//import {Row, Col, Button } from "react-materialize";
import {Row, Col } from "react-materialize";

import API from "../../utils/API";
import VirtualPlantAddModal from "../VirtualPlantAddModal/index.js";

import Swal from 'sweetalert2';

const moment = require('moment');

/**
 * VirtualGarden react component
 */
class VirtualGarden extends React.Component {
	state = {
		my_plants : []
	}

	/**
	 * Constructor for this component.
	 * 
	 * Fetch the user's plants from the database and 
	 * update 'myPlants' in the component state.
	 * 
	 * We need to do this *before* rendering the virtual
	 * garden.
	 */
	constructor(props){
		super(props);
		this.getGarden();
	}

	handleChange(event) {
    //console.log("typing");
    this.setState({
      [event.target.name]: event.target.value
    })
  }

	/**
	 * @function: getGarden
	 * 
	 * Fetches the user's virtual garden from the backend.
	 */
	getGarden = () => {
		//console.log("Checking passed in user param");
		//console.log(this.props.location.state);

		let userName = this.props.location.state.username;
		API.getVirtualGarden(userName).then((res) => {

			// If the user has no virtual plants in their virtual garden yet,
			// set 'my_plants' to an empty array.
			// Else, sort the virtual garden so that the plants whose watering
			// is overdue are displayed first
			if(res.data.length === 0) {
				this.setState({my_plants : []});
			} else{
				this.sortPlants(res.data);
			}
		});
	}

	/**
	 * @function:plantAdded
	 * 
	 * This is the callback invoked when a new plant is added to
	 * the virtual garden. It adds the newly added plant to the 
	 * current plants list.  It then calls sortPlants to sort the
	 * plants by most overdue for watering. 
	 * 
	 * Eventually, the garden gets re-rendered in sortPlants.
	 * 
	 */
	plantAdded = (newPlant) => {
		//console.log("Back in virtual garden, new plant added");
		//console.log(newPlant);

		let currentPlants = this.state.my_plants;

		currentPlants.push(newPlant);

		this.sortPlants(currentPlants);
	}

	/**
	 * @function:sortPlants
	 * 
	 * This function sorts the plants in the user's virtual garden by
	 * days overdue for watering. The most overdue plants are first.
	 * 
	 * After sorting the garden, it invokes setState to render the 
	 * garden.
	 */
	sortPlants = (plantList) => {
		
		let today = moment();

		/* Sort the plants so that the ones requiring attention are
			 displayed first */
		plantList.forEach((plant) => {

			let lastWateredDate = moment(plant.lastWatered);

			//console.log(`${plant.name} was last watered on ${plant.lastWatered}`);

			/* Get the difference between last watered date and today */
			let daysSinceLastWatered = today.diff(lastWateredDate, 'days');

			//console.log("It has been " + daysSinceLastWatered + " days"
			//+ " since " + plant.name + " was watered");

			plant.daysOverdue = daysSinceLastWatered - plant.wateringFrequency;
		});

		plantList.sort( (plant1, plant2) => {
			return plant2.daysOverdue - plant1.daysOverdue
		});

		this.setState( { my_plants : plantList } );
	}

	/**
	 * @function: wateringDone
	 * This is the callback function invoked when the user marks any 
	 * virtual plant as 'watered'.
	 * 
	 */
	wateringDone = (plantName) => {
		let my_plants_updated = this.state.my_plants;

		//event.preventDefault();

		//console.log(plantName);

		//console.log("User has watered " + plantName);

		let index = my_plants_updated.findIndex(plant => plant.name === plantName);

		my_plants_updated[index].lastWatered = moment().format("YYYY-MM-DD");

		// Todo: Make API Call to back-end
		// API.put()
		Swal.fire({
			title: plantName + ' - watering done!',
			type: 'success',
			showConfirmButton: false,
			showCancelButton: false,
			backdrop: true,
			// toast: true,
			timer: 1100,
			// position: "top-end",
			customClass: "success-toast"
			// confirmButtonText: 'Ok'
		}).then( () => this.sortPlants(my_plants_updated));

		//this.sortPlants(my_plants_updated);
	}

	/**
   * @function: render
   * 
   * Render function for this App.
   */
  render() {
		console.log("Rendering virtual garden");
		console.log(this.props.user);
		let num_plants = this.state.my_plants.length;
		if(!num_plants){
			return(
				<div>
					<h5>Get started with your virtual garden!</h5>
					<VirtualPlantAddModal 
						handleAdd={this.plantAdded}
						user={this.props.user}
					>
					</VirtualPlantAddModal>
				</div>
			);
		} else {
			return (
				<div>
					<Row>
						{this.state.my_plants.map( (plant, index) => (
							<Col s={12} m={10} l={4}>
								<VirtualPlant
									key={index.toString()}
									plantImage={plant.image[0]}
									plantName={plant.name}
									lastWatered={plant.lastWatered}
									daysOverdue={plant.daysOverdue}
									wateringFrequency={plant.wateringFrequency}
									wateringCallback={this.wateringDone}
								/>
							</Col>
						))}
					</Row>
					<VirtualPlantAddModal 
						handleAdd={this.plantAdded}
						user={this.props.user}
					>
					</VirtualPlantAddModal>
				</div>
			);
		}
  }
}

export default VirtualGarden;
