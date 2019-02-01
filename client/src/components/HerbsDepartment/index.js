import React from "react";
import API from "../../utils/API";
import PlantCards from "../PlantCards";
import {Pagination} from "react-materialize";

class HerbsDepartment extends React.Component {
    state = {
        herbs: []
    };

    componentDidMount() {
        this.loadHerbs();
    }

    loadHerbs() {
        API.getPlants()
            .then(res => {
                // console.log(res.data)
                this.filterForHerbs(res.data);
            })
            .catch(err => console.log(err));
    }

    filterForHerbs(data) {

        let herbs = [];

        for(var i=0; i<150; i++) {
            if(data[i].plantCategories[0] === "herbs") {
                herbs.push(data[i]);
            }
        }
        console.log(herbs);
        this.setState({herbs: herbs});

    }

    render() {
        return(
            <div className="row">
                <div className="plant-card-container">
                {this.state.herbs.map(herbs => (
                    <PlantCards 
                        className="col l3 plant-card"
                        commonName={herbs.commonName}
                        photo={herbs.photoURL}
                        zones={herbs.zone}
                        plantDetails={herbs.plantAttrURL}
                    />
                    // console.log(herbs)
                ))}
                </div>
                <Pagination items={10} activePage={1} maxButtons={8} />
            </div>
        );
    }
}

export default HerbsDepartment;