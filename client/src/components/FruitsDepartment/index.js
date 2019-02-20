import React from "react";
import API from "../../utils/API";
import PlantCards from "../PlantCards";
//import {Pagination, Col, Button} from "react-materialize";
import {Pagination, Col, ProgressBar, Row, Input} from "react-materialize";

class FruitsDepartment extends React.Component {
    state = {
        fruits: [],
        activeCards: [],
        activePage: "",
        pageItem: "",
        loading: true,
        plantNames: {},
        input: ""
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
                this.convertFunc(res.data);
            })
            .catch(err => console.log(err));
    }

    setFruit(data) {

        this.setState({fruits: data});
        this.setPageItem();
        this.pushUpItems(0);
    }

    setActivePage(pageNum) {
        this.setState({activePage: pageNum});
    }

    setPageItem() {
        let itemNum;
        if(this.state.fruits.length < 18) {
            itemNum = this.state.fruits.length;
            // console.log(itemNum);
        }
        else {
            itemNum = 18;
        }
        let pageItem = Math.ceil(this.state.fruits.length / itemNum);
        // console.log(pageItem);
        this.setState({pageItem: pageItem});
    }

    pushUpItems(event) {
        if(event === 0) {
            event = 1;
        }
        // console.log(event);
        let length = event * 18;
        let tempArray = [];
        for(var i = (length - 18); i < length; i++) {
            if(this.state.fruits[i] !== undefined) {
                tempArray.push(this.state.fruits[i]);
            }
        }
        // console.log(tempArray);
        this.setState({ activeCards: tempArray });
        this.setState({ loading: false });

        window.scrollTo(0, 0);
    }

    convertFunc(data) {
		let plantNamesArr = [];
		data.map(plant => {
			let lowerCaseName = plant.commonName.toLowerCase();
			plantNamesArr.push(lowerCaseName);
		});

		const plantNamesObj = {};
		for(const key of plantNamesArr) {
			plantNamesObj[key] = null;
		}

		// console.log(plantNamesObj);
		this.setState({plantNames: plantNamesObj});
    }

    handleOnChange(event) {
        let inputPlant = event.target.value.toUpperCase();
        this.setState({input: inputPlant})
    }

    render() {
        if(this.state.input === "") {
            return(
                (this.state.loading ? 
                    <ProgressBar />
                    :
                    <div className="content">
                        <Row>
                            <Input
                                s={7}
                                placeholder="Enter the name of the fruit"
                                onChange={(event) => {this.handleOnChange(event)}}
                            />
                        </Row>
                        <div className="row">
                            {this.state.activeCards.map(item => (
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
                        <Pagination items={this.state.pageItem} activePage={this.state.activePage} maxButtons={this.state.pageItem} onSelect={(event) => this.pushUpItems(event)} />
                    </div>
                )
            );
        }
        else {
            return(
                <div className="content">
                    <Row>
                        <Input
                            s={7}
                            placeholder="Enter the name of the fruit"
                            onChange={(event) => {this.handleOnChange(event)}}
                        />
                    </Row>
                    <div className="row">
                        {this.state.fruits
                            .filter(item => item.commonName.toUpperCase().includes(this.state.input))
                            .map((item) => (
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
                                )
                            )
                        }
                    </div>
                </div>
            )
        }
    }
}

export default FruitsDepartment;