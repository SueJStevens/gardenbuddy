import React from "react";
import API from "../../utils/API";
import PlantCards from "../PlantCards";
import { Pagination, Col } from "react-materialize";

class HerbsDepartment extends React.Component {
    state = {
        herbs: []
    };

    componentDidMount() {
        let category = "herbs";
        this.loadHerbs(category);
    }

    loadHerbs(category) {
        API.getCategory(category)
            .then(res => {
                // console.log(res.data);
                this.setHerbs(res.data);
            })
            .catch(err => console.log(err));
    }

    setHerbs(data) {

        this.setState({ herbs: data });

    }

    render() {
        return(
            this.state.herbs.map(item => (
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
            ))
        );
    }
}

export default HerbsDepartment;