import React from "react";
import API from "../../utils/API";
import PlantCards from "../PlantCards";
import { Col } from "react-materialize";

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
            <div className="row">
                {this.state.veges.map(item => (
                    <Col s={12} m={10} l={4}>
                        <PlantCards
                            key={item._id}
                            id={item._id} 
                            commonName={item.commonName}
                            photo={item.photoURL}
                            zones={item.zone}
                            plantDetails={item.plantAttrURL}
                            variety={item.variety}
                            category={item.plantCategories[0]}
                        />
                    </Col>
                ))}
            </div>
        );
    }
}

export default VegeDepartment;