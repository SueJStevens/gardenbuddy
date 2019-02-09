import React from "react";
import "./style.css";
import { Button, Modal, Row, Col, Input, ProgressBar } from "react-materialize";
import SearchBar from "../SearchBar";
import PlantCards from "../PlantCards";
import API from "../../utils/API";

class NewComerIns extends React.Component {

    state = {
        zipcode : '',
        category : '',
        searchedZone: '',
        results : [],
        toPopulate: []
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    searchPlants = () => {
        let {zipcode, category} = this.state;
        //console.log("Searching for " + category + " in " + zipcode);

        API.searchPlants(category, zipcode)
            .then( (res) => {
                //console.log("Here are the recommended " + category);
                //console.log(res.data);
                this.setState( {results : res.data.matchingPlants , searchedZone : res.data.searchedZone} );
                this.selectRandomThree();
            })
    }

    selectRandomThree() {

        let toPopulateArr = [];
        let i = 0;
        while( i < 3) {
            let rand = Math.floor(Math.random() * this.state.results.length);
            // console.log(rand);
            toPopulateArr.push(this.state.results[rand]);
            i++;
        }
        // console.log(toPopulateArr);
        this.setState({toPopulate: toPopulateArr});
        this.setState({loading: false})
    }

    render(){
        let searchedZone = this.state.searchedZone;
        return(
            <div className="instruction">
                <Modal
                    open={this.state.isModalOpen}
                    header='Follow the steps to find out suitable plants to grow'
                    bottomSheet
                    trigger={<Button waves="light" name="category" className="amber darken-1">Click to start</Button>}
                    className="yellow lighten-5">
                        <SearchBar name="zipcode" handleInputChange={this.handleInputChange}/>
                        <Row>
                            <Input s={12} name="category" onChange={this.handleInputChange} type='select' label="Choose a category" defaultValue='2'>
                                <option defaultValue='default'>Select One</option>
                                <option value='flowers'>Flowers</option>
                                <option value='vegetables'>Vegetables</option>
                                <option value='fruits'>Fruits</option>
                                <option value='herbs'>Herbs</option>
                            </Input>
                        </Row>
                        <Button waves='light' className="amber darken-2" onClick={this.searchPlants}>Search</Button>
                        {'   '}
                        <Button waves='light' className="amber darken-1" onClick={() => this.selectRandomThree()}>Next Set</Button>

                        <h5 id="result">Check them out here!</h5>
                        <Row>
                        { this.state.toPopulate.map(item => (
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
                                    searchedZone={searchedZone}
                                />
                            </Col>
                        ))}
                        </Row>
                </Modal>
            </div>
        )
    }
}

export default NewComerIns;