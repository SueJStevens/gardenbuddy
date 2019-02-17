import React from "react";
import { Modal, Row, Input, Button, Autocomplete } from "react-materialize";

class EditModal extends React.Component {

    state = {
        plantName: "",
        lastWatered: "",
        wateringFrequency: ""
    }

    handleChange = (event) => {
        // console.log(event.target.name, "here is the name of the event");
        // console.log(event.target.value, "here is the event target value");
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = () => {
        console.log(this.state);
    }
    
    render() {    
        return(
            <Modal
            header='Add a new plant to your garden'
            trigger={<Button className="virtual-plant-button"><i class="fas fa-pencil-alt"></i>Edit</Button>}
            className="yellow lighten-5"
            >
                <Row>
                    <Input name="plantName" label="Give your plant a name" s={12} onChange={this.handleChange} />
                    <Input name="lastWatered" type="date" format="mmmm-dd-yy" label="Last watered on" s={12} onChange={this.handleChange} />
                    <Input name="wateringFrequency" label="watering frequency" s={12} onChange={this.handleChange} />
                </Row>

                <Button onClick={()=>this.handleSubmit(this.state)}>
                    Submit
                </Button>
            </Modal>

        )
    }
}

export default EditModal;