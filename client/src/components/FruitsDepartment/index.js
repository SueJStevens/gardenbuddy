import React from "react";
import API from "../../utils/API";
import PlantCards from "../PlantCards";
import {Pagination, Col, Button} from "react-materialize";

class FruitsDepartment extends React.Component {
    state = {
        fruits: []
    };

    componentDidMount() {
        let category = "fruits";
        this.loadFruits(category);
    }

    loadFruits(category) {
        API.getCategory(category)
            .then(res => {
                // console.log(res.data);
                this.setFruit(res.data);
            })
            .catch(err => console.log(err));
    }

    setFruit(data) {

        this.setState({fruits: data});
        console.log(this.state.fruits);
        console.log(typeof(this.state.fruits));

    }

    render() {
        return(
            <div className="row">
                {this.state.fruits.map(item => (
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

export default FruitsDepartment;