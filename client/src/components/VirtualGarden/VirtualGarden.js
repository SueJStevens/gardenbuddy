import React from "react";
import sample_plants  from "./sample_plants.json";
import VirtualPlant from "../VirtualPlant";
//import Wrapper from "../Wrapper";
import {Row, Col} from "react-materialize";

/**
 * VirtualGarden react component
 */
class VirtualGarden extends React.Component {
	state = {
		my_plants : []
	}

	/**
	 * Callback to run when this component mounts.
	 * 
	 * Fetch the user's plants from the database and 
	 * update 'myPlants' in the component state.
	 */
	componentDidMount = () => {
		
		/************************************************************/
		/* TODO : Call our backend API to get virtual garden plants */
		/************************************************************/

		this.setState( { my_plants : sample_plants } );
		
	}

	/**
   * @function: render
   * 
   * Render function for this App.
   */
  render() {
    return (
				<Row>
					{this.state.my_plants.map((plant, index) => (
						<Col s= {3}>
							<VirtualPlant
								clickCount={this.clickCount}
								id={plant.id}
								key={index}
								image={plant.image}
								name={plant.name}
								lastWatered={plant.lastWatered}
							/>
						</Col>
					))}
				</Row>
    );
  }
}

export default VirtualGarden;
