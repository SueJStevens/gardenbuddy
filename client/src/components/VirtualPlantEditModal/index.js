import React from "react";
import { Modal, Row, Input, Button } from "react-materialize";
import API from "../../utils/API";
import Swal from "sweetalert2";

class EditModal extends React.Component {

    state = {
        user: {},
        plantId: "",
        plantName: "",
        lastWatered: "",
        wateringFrequency: ""
    }

    componentDidMount() {
        this.setState({ plantId: this.props.plantId });
        this.setState({ user: this.props.user });
    }

    handleChange = (event) => {
        // console.log(event.target.name, "here is the name of the event");
        // console.log(event.target.value, "here is the event target value");
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = () => {
        console.log(this.state);
        let username = this.state.user.username;
        let id = this.state.plantId;
        let plantData = {
            name: this.state.plantName,
            lastWatered : this.state.lastWatered,
            wateringFrequency: this.state.wateringFrequency
        };
        API.editPlant(username, id, plantData)
            .then(res => {
                console.log(res);

            })
            .catch(err => console.log(err));
    }
    
    render() {    
        return(
            <Modal
            header='Add a new plant to your garden'
            trigger={<Button className="virtual-plant-button"><i class="fas fa-pencil-alt"></i>Edit</Button>}
            className="yellow lighten-5"
            >
                <Row>
                    <Input name="plantName" type="text" label="Give your plant a name" s={12} onChange={this.handleChange} />
                    <Input name="lastWatered" type="date" format="mmmm-dd-yy" label="Last watered on" s={12} onChange={this.handleChange} />
                    <Input name="wateringFrequency" type="number" label="watering frequency" s={12} onChange={this.handleChange} />
                </Row>

                <Button onClick={()=>this.handleSubmit(this.state)}>
                    Submit
                </Button>
            </Modal>

        )
    }
}

export default EditModal;