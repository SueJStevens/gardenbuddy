import React from "react";
import API from "../../utils/API";
import UserCards from "../UserCards";
import { Pagination, Col, ProgressBar, Row, Input } from "react-materialize";

class Userlist extends React.Component {
    state = {
        users: [],
        activeCards: [],
        activePage: "",
        pageItem: "",
        loading: true,
        plantNames: {},
        input: ""
    };

    componentDidMount() {
        // let category = "users";
        this.loadUsers();
    }

    loadUsers() {
        API.getUsers()
            .then(res => {
                console.log(res.data);
                this.setUsers(res.data);
                this.convertFunc(res.data);
            })
            .catch(err => console.log(err));
    }

    setUsers(data) {
        this.setState({ users: data });
        this.setPageItem();
        this.pushUpItems(0);
    }

    setActivePage(pageNum) {
        this.setState({activePage: pageNum});
    }

    setPageItem() {
        let itemNum;
        if(this.state.users.length < 18) {
            itemNum = this.state.users.length;
            // console.log(itemNum);
        }
        else {
            itemNum = 18;
        }
        let pageItem = Math.ceil(this.state.users.length / itemNum);
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
            if(this.state.users[i] !== undefined) {
                tempArray.push(this.state.users[i]);
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
                                placeholder="Search By Users First Name"
                                onChange={(event) => {this.handleOnChange(event)}}
                            />
                        </Row>
                        <div className="row">
                            {this.state.activeCards.map(item => (
                                <Col s={12} m={10} l={4}>
                                    <UserCards
                                        key={item._id}
                                        id={item._id} 
                                        firstName={item.firstName}
                                        lastName={item.lastName}
                                        photo={item.profilepic}
                                        email={item.username}
                                        city={item.city}
                                        aboutMe={item.aboutme}
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
                            placeholder="Search By Users First Name"
                            onChange={(event) => {this.handleOnChange(event)}}
                        />
                    </Row>
                    <div className="row">
                        {this.state.users
                            .filter(item => item.firstName.toUpperCase().includes(this.state.input))
                            .map((item) => (
                                <Col s={12} m={10} l={4}>
                                    <UserCards
                                        key={item._id}
                                        id={item._id} 
                                        firstName={item.firstName}
                                        lastName={item.lastName}
                                        photo={item.profilepic}
                                        email={item.username}
                                        city={item.city}
                                        aboutMe={item.aboutme}
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

export default Userlist;