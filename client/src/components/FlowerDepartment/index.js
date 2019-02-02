import React from "react";
import API from "../../utils/API";
import PlantCards from "../PlantCards";
import {Pagination, Col} from "react-materialize";

class FlowerDepartment extends React.Component {
    state = {
        flowers: []
    };

    componentDidMount() {
        let category = "flowers";
        this.loadFlowers(category);
    }

    loadFlowers(category) {
        API.getCategory(category)
            .then(res => {
                // console.log(res.data);
                this.setFlower(res.data);
            })
            .catch(err => console.log(err));
    }

    setFlower(data) {

        this.setState({flowers: data});

    }

    render() {
        return(
                this.state.flowers.map(item => (
                    <Col s={12} m={10} l={4}>
                        <PlantCards
                            id={item._id} 
                            commonName={item.commonName}
                            photo={item.photoURL}
                            zones={item.zone}
                            plantDetails={item.plantAttrURL}
                            variety={item.variety}
                            category={item.plantCategories[0]}
                        />
                    </Col>
                ))
        );
    }
}

export default FlowerDepartment;