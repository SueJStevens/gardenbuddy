import React from "react";
import API from "../../utils/API";
import PlantCards from "../PlantCards";
import {Pagination, Col} from "react-materialize";

class FlowerDepartment extends React.Component {
    state = {
        flowers: [],
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
    }

    setActivePage(pageNum) {
        this.setState({activePage: pageNum});
    }

    setPageItem() {
        let pageItem = Math.ceil(this.state.flowers.length / 16);
        console.log(pageItem);
        this.setState({pageItem: pageItem});
    }

    render() {
        return(
            <div className="content">
                <div className="row">
                    {this.state.flowers.map(item => (
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
                <Pagination items={this.setPageItem} activePage={1} maxButtons={8} />
            </div>
        );
    }
}

export default FlowerDepartment;