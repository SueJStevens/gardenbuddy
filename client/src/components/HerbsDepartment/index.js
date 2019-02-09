import React from "react";
import API from "../../utils/API";
import PlantCards from "../PlantCards";
import { Pagination, Col, ProgressBar, Row, Autocomplete } from "react-materialize";

class HerbsDepartment extends React.Component {
    state = {
        herbs: [],
        activeCards: [],
        activePage: "",
        pageItem: "",
        loading: true,
        plantNames: {}
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
                this.convertFunc(res.data);
            })
            .catch(err => console.log(err));
    }

    setHerbs(data) {
        this.setState({ herbs: data });
        this.setPageItem();
        this.pushUpItems(0);
    }

    setActivePage(pageNum) {
        this.setState({activePage: pageNum});
    }

    setPageItem() {
        let itemNum;
        if(this.state.herbs.length < 18) {
            itemNum = this.state.herbs.length;
            // console.log(itemNum);
        }
        else {
            itemNum = 18;
        }
        let pageItem = Math.ceil(this.state.herbs.length / itemNum);
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
            if(this.state.herbs[i] !== undefined) {
                tempArray.push(this.state.herbs[i]);
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
    
    handleChange() {
        
    }

    render() {
        return(
            (this.state.loading ? 
                <ProgressBar />
                :
                <div className="content">
                    <Row>
                        <Autocomplete
                            title='Name of the fruit?'
                            data={this.state.plantNames}
                            onChange={this.handleChange}
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
}

export default HerbsDepartment;