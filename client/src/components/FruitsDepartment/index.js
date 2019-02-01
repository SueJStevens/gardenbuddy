import React from "react";
import API from "../../utils/API";
import PlantCards from "../PlantCards";
import {Pagination} from "react-materialize";

class FruitsDepartment extends React.Component {
    state = {
        fruits: []
    };

    componentDidMount() {
        this.loadFruits();
    }

    loadFruits() {
        API.getPlants()
            .then(res => {
                // console.log(res.data)
                this.filterForFruits(res.data);
            })
            .catch(err => console.log(err));
    }

    filterForFruits(data) {

        let fruits = [];

        for(var i=0; i<data.length; i++) {
            if(data[i].plantCategories[0] === "fruits") {
                fruits.push(data[i]);
            }
        }
        console.log(fruits);
        this.setState({fruits: fruits});

    }

    render() {
        return(
            <div>
                {this.state.fruits.map(fruit => (
                    <PlantCards 
                        commonName={fruit.commonName}
                        photo={fruit.photoURL}
                        zones={fruit.zone}
                        plantDetails={fruit.plantAttrURL}
                    />
                    // console.log(fruit)
                ))}
                <Pagination items={10} activePage={1} maxButtons={8} />
            </div>
        );
    }
}

export default FruitsDepartment;