import React from "react";
import API from "../../utils/API";
import PlantCards from "../PlantCards";
import {Pagination} from "react-materialize";

class FlowerDepartment extends React.Component {
    state = {
        flowers: []
    };

    componentDidMount() {
        this.loadFlowers();
    }

    loadFlowers() {
        API.getPlants()
            .then(res => {
                // console.log(res.data)
                this.filterForFlower(res.data);
            })
            .catch(err => console.log(err));
    }

    filterForFlower(data) {

        let flowers = [];

        for(var i=0; i<150; i++) {
            if(data[i].plantCategories[0] === "flowers") {
                flowers.push(data[i]);
            }
        }
        console.log(flowers);
        this.setState({flowers: flowers});

    }

    render() {
        return(
            <div>
                {this.state.flowers.map(flower => (
                    <PlantCards 
                        commonName={flower.commonName}
                        photo={flower.photoURL}
                        zones={flower.zone}
                        plantDetails={flower.plantAttrURL}
                    />
                    // console.log(flower)
                ))}
                <Pagination items={10} activePage={1} maxButtons={8} />
            </div>
        );
    }
}

export default FlowerDepartment;