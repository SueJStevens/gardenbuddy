import React from "react";
import API from "../../utils/API";
import PlantCards from "../PlantCards";
import {Pagination} from "react-materialize";

class VegeDepartment extends React.Component {
    state = {
        veges: []
    };

    componentDidMount() {
        this.loadVeges();
    }

    loadVeges() {
        API.getPlants()
            .then(res => {
                // console.log(res.data)
                this.filterForVeges(res.data);
            })
            .catch(err => console.log(err));
    }

    filterForVeges(data) {

        let veges = [];

        for(var i=0; i<150; i++) {
            if(data[i].plantCategories[0] === "herbs") {
                veges.push(data[i]);
            }
        }
        console.log(veges);
        this.setState({veges: veges});

    }

    render() {
        return(
            <div>
                {this.state.veges.map(veges => (
                    <PlantCards 
                        commonName={veges.commonName}
                        photo={veges.photoURL}
                        zones={veges.zone}
                        plantDetails={veges.plantAttrURL}
                    />
                    // console.log(veges)
                ))}
                <Pagination items={10} activePage={1} maxButtons={8} />
            </div>
        );
    }
}

export default VegeDepartment;