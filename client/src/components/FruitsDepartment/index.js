import React from "react";
import API from "../../utils/API";
import PlantCards from "../PlantCards";
//import {Pagination, Col, Button} from "react-materialize";
import {Pagination, Col, ProgressBar} from "react-materialize";

class FruitsDepartment extends React.Component {
    state = {
        fruits: [],
        activeCards: [],
        activePage: "",
        pageItem: "",
        loading: true
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

    render() {
        return(
            (this.state.loading ? 
                <ProgressBar />
                :
                <div className="content">
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

export default FruitsDepartment;