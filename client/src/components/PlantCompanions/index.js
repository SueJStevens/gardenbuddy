import React from 'react';
import { withRouter } from "react-router-dom";
import VirtualPlant from "../VirtualPlant";
import { Row, Col } from "react-materialize";
import API from ".././../utils/API";

class PlantCompanions extends React.Component {
    
    state = {
        item: [],
    };

    componentDidMount() {
        let id = this.props.location.state.id;
        API.getAPlant(id)
            .then((res) => this.setItem(res.data))
            .catch((err) => console.log(err));
    }

    setItem(data) {
        if(data.compatable[0] === "" || data.compatable[0] === undefined) {
            let data = " I have no friends...¯\_༼ ಥ ‿ ಥ ༽_/¯"
            this.setState({item: data});
        }
        else{
            let dataYesCompatable = data.compatable.join(", ");
            this.setState({item: dataYesCompatable});
        }
    }

    render() {    
        return (
            <h6>{this.state.item}</h6>
        );
    }
}

export default withRouter(PlantCompanions);

