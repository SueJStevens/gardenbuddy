import React from "react";
import API from "../../utils/API";
import PlantCards from "../PlantCards";
import { Pagination, Col, ProgressBar } from "react-materialize";

class VegeDepartment extends React.Component {
    state = {
        veges: [],
        activeCards: [],
        activePage: "",
        pageItem: "",
        loading: true
    };

    componentDidMount() {
        let category = "vegetables";
        this.loadVegetables(category);
    }

    loadVegetables(category) {
        API.getCategory(category)
            .then(res => {
                // console.log(res.data);
                this.setVegetables(res.data);
            })
            .catch(err => console.log(err));
    }

    setVegetables(data) {
        this.setState({veges: data});
        this.setPageItem();
        this.pushUpItems(0);
    }

    setActivePage(pageNum) {
        this.setState({activePage: pageNum});
    }

    setPageItem() {
        let itemNum;
        if(this.state.veges.length < 18) {
            itemNum = this.state.veges.length;
            // console.log(itemNum);
        }
        else {
            itemNum = 18;
        }
        let pageItem = Math.ceil(this.state.veges.length / itemNum);
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
            if(this.state.veges[i] !== undefined) {
                tempArray.push(this.state.veges[i]);
            }
        }
        // console.log(tempArray);
        this.setState({ activeCards: tempArray });
        this.setState({loading: false})
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

export default VegeDepartment;