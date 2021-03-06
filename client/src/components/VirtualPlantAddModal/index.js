import React from "react";
import { Button, Row, Input, Modal, Autocomplete } from "react-materialize";
import API from "../../utils/API";
import Swal from 'sweetalert2';

const moment = require('moment');


/**
 * This component allows the user to add a new virtual plant
 * to their virtual garden.
 * 
 * It is a MModal that contains a form.
 * .
 * @param {*} props 
 *            
 * props.name : name of the virtual plant 
 * props.image : image of the virtual plant
 * props.lastWatered : last time this plant was watered
 * props.wateringDue : boolean indicating that 
 *                     its time to water this plant
 */
class  VirtualPlantAddModal extends React.Component {

	state = {
		plantNames: {},
		value:'',
		name:'',
		commonName:'',
		image:'',
		lastWatered:'',
		wateringFrequency:''
	}

	componentDidMount() {
		API.getPlants()
			.then((res) => this.convertFunc(res.data))
			.catch((err) => console.log(err));
	}

	convertFunc(data) {
		let plantNamesArr = [];
		data.map(plant => {
			let lowerCaseName = plant.commonName.toLowerCase();
			plantNamesArr.push(lowerCaseName);
		});

		const plantNamesObj = {};
		for(const key of plantNamesArr) {
			plantNamesObj[key] = null;
		}

		// console.log(plantNamesObj);
		this.setState({plantNames: plantNamesObj});
	}

	handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
	}
	
	addNewPlant = () => {
		let {name, commonName, lastWatered, wateringFrequency} = this.state;
		//let newPlant = {};
		let virtualGardenCallback = this.props.handleAdd;

		let newPlantForm = new FormData();

		// Get the uploaded plant image
		let plantImage = document.getElementById("plant-image").files[0];

		if(!plantImage){
			// Error handling
		}

		newPlantForm.append("image", plantImage);

		// Fill up the 'newPlant' object with the user input. We will submit this
		// object to the back-end.
		newPlantForm.append("name", name);
		newPlantForm.append("commonName", commonName);

		// Need this code because the date string retured by react materialize date picker
		// is not a valid moment object.
		let dateComponents = lastWatered.split(" ");
		// console.log(dateComponents);
    if(dateComponents.length === 3) {
			// Remove the trailing comma from the month string
			dateComponents[1] = dateComponents[1].slice(0, 3);
			let temp = dateComponents[0];
			dateComponents[0] = dateComponents[1];
			dateComponents[1] = temp;
			lastWatered = dateComponents.join(" ");
			// console.log("Last watered on " + lastWatered);
		}		
		
		let lastWateredFormatted = moment(lastWatered, "MMM DD YYYY").local().format("YYYY-MM-DDTHH:mm");

		newPlantForm.append("lastWatered", lastWateredFormatted);
		newPlantForm.append("wateringFrequency", parseInt(wateringFrequency));
		
		let userName = this.props.user.username;
		newPlantForm.append("userId", this.props.user._id);

		//console.log("Will add a new plant with the following details");
		//console.log(userName, newPlant);

		// console.log(newPlantForm);
		console.log(userName);

		// Call API to post this new plant to the database
		API.addPlant(userName, newPlantForm)
			.then(res => {
				// console.log("New plant added");
				// console.log(res.data);
				
				Swal.fire({
          title: 'Added to garden!',
          type: 'success',
          showConfirmButton: false,
          showCancelButton: false,
          backdrop: true,
          // toast: true,
          timer: 1100,
          // position: "top-end",
          customClass: "success-toast"
          // confirmButtonText: 'Ok'
        }).then(() => {
					virtualGardenCallback(res.data);
				});
			})
			.catch(err => {
				Swal.fire({
          title: 'oops - something went wrong, try again',
          type: 'error',
          showConfirmButton: false,
          showCancelButton: false,
          // toast: true,
          timer: 1000,
          // position: "top-end",
          customClass: "fail-toast"
          // confirmButtonText: 'Ok'
        });
			});

	}

	render(){
		return(
			<Modal
				header='Add a new plant to your garden'
				trigger={<Button>Add New Plant</Button>}
				className="yellow lighten-5"
			>
				<Row>
					<Input name="name" label="Give your plant a name" s={12} onChange={this.handleChange} />
					<Autocomplete title='What type of plant is it?' data={this.state.plantNames} />
					<Input name="image" type="file" label="Upload Image" id="plant-image" s={12} onChange={this.handleChange} />
					<Input name="lastWatered" type="date" format="mmmm-dd-yy" label="Last watered on" s={12} onChange={this.handleChange} />
					<Input name="wateringFrequency" label="watering frequency" s={12} onChange={this.handleChange} />
				</Row>

				<Button onClick={()=>this.addNewPlant(this.state)}>
					Submit
				</Button>
			</Modal>
		);
	}
  
}

export default VirtualPlantAddModal;
