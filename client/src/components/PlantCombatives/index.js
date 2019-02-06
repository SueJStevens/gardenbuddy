import React from 'react';
import { withRouter } from "react-router-dom";
import API from "../../utils/API";

class PlantCombatives extends React.Component {
    
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
        if(data.combative[0] === "" || data.combative[0] === undefined) {
            let data = "I don't compte I just grow...（￣ー￣)ゞ "
            this.setState({item: data});
        }
        else{
            let dataYesCombative = data.combative.join(", ");
            this.setState({item: dataYesCombative});
        }
    }

    render() {    
        return (
            <h6>{this.state.item}</h6>
        );
    }
}

export default withRouter(PlantCombatives);

