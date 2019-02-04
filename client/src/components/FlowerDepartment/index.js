import React from "react";
import API from "../../utils/API";
import PlantCards from "../PlantCards";
import {Pagination, Col} from "react-materialize";

class FlowerDepartment extends React.Component {
    state = {
        flowers: [],
        activeCards: [],
        activePage: "",
        pageItem: ""
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
        let pageItem = Math.ceil(this.state.flowers.length / 15);
        console.log(pageItem);
        this.setState({pageItem: pageItem});
    }

    pushUpItems(event) {
        if(event === 0) {
            event = 1;
        }
        console.log(event);
        let length = event * 16;
        let tempArray = [];
        for(var i = event; i < length; i++) {
            tempArray.push(this.state.flowers[i]);
        }
        console.log(tempArray);

        this.setState({ activeCards: tempArray });
    }

    render() {
        return(
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
                <Pagination items={this.state.pageItem} activePage={this.state.activePage} maxButtons={this.state.pageItem - 2} onSelect={(event) => this.pushUpItems(event)} />
            </div>
        );
    }
}

export default FlowerDepartment;