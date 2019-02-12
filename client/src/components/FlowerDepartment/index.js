import React from "react";
import API from "../../utils/API";
import PlantCards from "../PlantCards";
import {Pagination, Col, Row, ProgressBar, Input} from "react-materialize";

class FlowerDepartment extends React.Component {
    state = {
        flowers: [],
        activeCards: [],
        activePage: "",
        pageItem: "",
        loading: true,
        plantNames: {},
        input: ""
    };

    componentDidMount() {
        let category = "flowers";
        this.loadFlowers(category);
    }

    loadFlowers(category) {
        API.getCategory(category)
            .then(res => {
                // console.log(res.data);
                this.setFlower(res.data);
                this.convertFunc(res.data);
            })
            .catch(err => console.log(err));
    }

    setFlower(data) {
        this.setState({flowers: data});
        this.setPageItem();
        this.pushUpItems(0);
    }

    setActivePage(pageNum) {
        this.setState({activePage: pageNum});
    }

    setPageItem() {
        let itemNum;
        if(this.state.flowers.length < 18) {
            itemNum = this.state.flowers.length;
            // console.log(itemNum);
        }
        else {
            itemNum = 18;
        }
        let pageItem = Math.ceil(this.state.flowers.length / itemNum);
        // console.log(pageItem);
        this.setState({pageItem: pageItem});
    }

    pushUpItems(event) {
        // console.log(this.state.flowers);
        if(event === 0) {
            event = 1;
        }
        // console.log(event);
        let length = event * 18;
        let tempArray = [];
        for(var i = (length - 18); i < length; i++) {
            // console.log(this.state.flowers[length]);
            if(this.state.flowers[i] !== undefined) {
                tempArray.push(this.state.flowers[i]);
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

		console.log(plantNamesObj);
		this.setState({plantNames: plantNamesObj});
    }
    
    handleOnChange(event) {
        let inputPlant = event.target.value.toUpperCase();
        console.log(inputPlant);
        this.setState({input: inputPlant})
        console.log(this.state.input);
    }

    render() {
        console.log(this.state.input)
        if(this.state.input === "") {
            return(
                (this.state.loading ? 
                    <ProgressBar />
                    :
                    <div className="content">
                        <Row>
                            <Input
                                s={7}
                                placeholder="Enter the name of the flower"
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
                            placeholder="Enter the name of the flower"
                            onChange={(event) => {this.handleOnChange(event)}}
                        />
                    </Row>
                    <div className="row">
                        {this.state.flowers
                            .filter(item => item.commonName.includes(this.state.input))
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

export default FlowerDepartment;