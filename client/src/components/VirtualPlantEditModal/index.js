import React from "react";
import { Modal, Row, Input, Button } from "react-materialize";
import API from "../../utils/API";
import Swal from "sweetalert2";


class EditModal extends React.Component {

    state = {
        plantId: "",
        plantName: "",
        lastWatered: "",
        wateringFrequency: ""
    }

    constructor(props){
        super(props);
        this.state = {
            plantId: this.props.plantId,
            plantName: this.props.plantName,
            lastWatered: this.props.lastWatered,
            wateringFrequency: this.props.wateringFrequency
        }
    }

    componentDidMount() {
        // console.log(this.state);
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = () => {
        console.log(this.state);
        let id = this.props.plantId;
        let plantData = {
            name: this.state.plantName,
            lastWatered : this.state.lastWatered,
            wateringFrequency: this.state.wateringFrequency
        };
        API.update(id, plantData)
            .then(res => {
                Swal.fire({
					title: this.state.plantName + ' - Editted sucessfully!',
					type: 'success',
					showConfirmButton: false,
					showCancelButton: false,
					backdrop: true,
					// toast: true,
					timer: 1100,
					// position: "top-end",
					customClass: "success-toast"
					// confirmButtonText: 'Ok'
				}).then(() => this.setState(this.state))
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