import React from "react";
import API from "../../utils/API";
import PlantCards from "../PlantCards";
import {Pagination, Col} from "react-materialize";

class VegeDepartment extends React.Component {
    state = {
        veges: []
    };

    componentDidMount() {
        let category = "vegetables";
        this.loadVegetables(category);
    }

    loadVegetables(category) {
        API.getCategory(category)
            .then(res => {
                // console.log(res.data);
                this.setVegetables(res.data);
            })
            .catch(err => console.log(err));
    }

    setVegetables(data) {

        this.setState({veges: data});

    }

    render() {
        return(
                this.state.veges.map(item => (
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

export default VegeDepartment;