import React from "react";
import API from "../../utils/API";

class FlowerDepartment extends React.Component {
    state = {
        flowers: []
    };

    componentDidMount() {
        alert("hello!");
        this.loadFlowers();
    }

    loadFlowers() {
        API.getPlants()
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }

    render() {
        return(
            <wrapper>

            </wrapper>
        );
    }
}

export default FlowerDepartment;