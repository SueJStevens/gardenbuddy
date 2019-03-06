import React from "react";
import API from "../../utils/API";
import UserCards from "../UserCards";
import "./style.css";
import { Pagination, Col, ProgressBar, Row, Input } from "react-materialize";

class Userlist extends React.Component {
    state = {
        users: [],
        activeCards: [],
        activePage: "",
        pageItem: "",
        loading: true,
        userNames: {},
        input: "",
        searchUserState: "",
        stateResults: []
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
        this.setState({ activePage: pageNum });
    }

    setPageItem() {
        let itemNum;
        if (this.state.users.length < 18) {
            itemNum = this.state.users.length;
            // console.log(itemNum);
        }
        else {
            itemNum = 18;
        }
        let pageItem = Math.ceil(this.state.users.length / itemNum);
        // console.log(pageItem);
        this.setState({ pageItem: pageItem });
    }

    pushUpItems(event) {
        if (event === 0) {
            event = 1;
        }
        // console.log(event);
        let length = event * 18;
        let tempArray = [];
        for (var i = (length - 18); i < length; i++) {
            if (this.state.users[i] !== undefined) {
                tempArray.push(this.state.users[i]);
            }
        }
        // console.log(tempArray);
        this.setState({ activeCards: tempArray });
        this.setState({ loading: false });

        window.scrollTo(0, 0);
    }

    convertFunc(data) {
        let userNamesArr = [];
        data.map(user => {
            let lowerCaseName = user.commonName.toLowerCase();
            userNamesArr.push(lowerCaseName);
        });

        const userNamesObj = {};
        for (const key of userNamesArr) {
            userNamesObj[key] = null;
        }

        // console.log(plantNamesObj);
        this.setState({ userNames: userNamesObj });
    }

    handleOnChange(event) {
        let inputPlant = event.target.value.toUpperCase();
        this.setState({ input: inputPlant })
    }

    handleUserStateSearch(event) {
        let userState = event.target.value

        API.getUsersByState(userState).then((response) => {
            console.log(response.data);
            this.updateStateResults(response.data)
        })

    }

    updateStateResults(data) {
        this.setState({
            stateResults: data
        })
    }

    render() {
        if (this.state.input === "") {
            return (
                (this.state.loading ?
                    <ProgressBar />
                    :
                    <div className="content">
                        <Row>
                            <Input
                                s={12} m={7} l={7}
                                placeholder="Search By Users First Name"
                                onChange={(event) => { this.handleOnChange(event) }}
                            />
                            <Col s={12} m={1} l={1}>
                                <p><b> OR </b></p>
                            </Col>
                            <Input
                                s={12} m={4} l={4}
                                onChange={(event) => { this.handleUserStateSearch(event) }}
                                type='select'
                                label="Or See Users in A State"
                                defaultValue='start'>
                                <option value='start'>Choose a State</option>
                                <option value='Alabama'>Alabama</option>
                                <option value='Alaska'>Alaska</option>
                                <option value='Arizona'>Arizona</option>
                                <option value='Arkansas'>Arkansas</option>
                                <option value='California'>California</option>
                                <option value='Colorado'>Colorado</option>
                                <option value='Connecticut'>Connecticut</option>
                                <option value='Delaware'>Delaware</option>
                                <option value='Florida'>Florida</option>
                                <option value='Georgia'>Georgia</option>
                                <option value='Hawaii'>Hawaii</option>
                                <option value='Idaho'>Idaho</option>
                                <option value='Illinois'>Illinois</option>
                                <option value='Indiana'>Indiana</option>
                                <option value='Iowa'>Iowa</option>
                                <option value='Kansas'>Kansas</option>
                                <option value='Kentucky'>Kentucky</option>
                                <option value='Louisiana'>Louisiana</option>
                                <option value='Maine'>Maine</option>
                                <option value='Maryland'>Maryland</option>
                                <option value='Massachusetts'>Massachusetts</option>
                                <option value='Michigan'>Michigan</option>
                                <option value='Minnesota'>Minnesota</option>
                                <option value='Mississippi'>Mississippi</option>
                                <option value='Missouri'>Missouri</option>
                                <option value='Montana'>Montana</option>
                                <option value='Nebraska'>Nebraska</option>
                                <option value='Nevada'>Nevada</option>
                                <option value='New Hampshire'>New Hampshire</option>
                                <option value='New Jersey'>New Jersey</option>
                                <option value='New Mexico'>New Mexico</option>
                                <option value='New York'>New York</option>
                                <option value='North Carolina'>North Carolina</option>
                                <option value='North Dakota'>North Dakota</option>
                                <option value='Ohio'>Ohio</option>
                                <option value='Oklahoma'>Oklahoma</option>
                                <option value='Oregon'>Oregon</option>
                                <option value='Pennsylvania'>Pennsylvania</option>
                                <option value='Rhode Island'>Rhode Island</option>
                                <option value='South Carolina'>South Carolina</option>
                                <option value='South Dakota'>South Dakota</option>
                                <option value='Tennessee'>Tennessee</option>
                                <option value='Texas'>Texas</option>
                                <option value='Utah'>Utah</option>
                                <option value='Vermont'>Vermont</option>
                                <option value='Virginia'>Virginia</option>
                                <option value='Washington'>Washington</option>
                                <option value='West Virginia'>West Virginia</option>
                                <option value='Wisconsin'>Wisconsin</option>
                                <option value='Wyoming'>Wyoming</option>
                                <option value='District of Colombia'>District of Colombia</option>
                            </Input>
                        </Row>
                        <div className="row">
                            {this.state.activeCards.map(item => (
                                <Col s={12} m={4} l={3}>
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
            return (
                <div className="content">
                    <Row>
                        <Input
                            s={12} m={7} l={7}
                            placeholder="Search By Users First Name"
                            onChange={(event) => { this.handleOnChange(event) }}
                        />
                        <Col s={12} m={1} l={1}>
                            <p><b> OR </b></p>
                        </Col>
                        <Input
                            s={12} m={4} l={4}
                            onChange={(event) => { this.handleUserStateSearch(event) }}
                            type='select'
                            label="Or See Users in A State"
                            defaultValue='start'>
                            <option value='start'>Choose a State</option>
                            <option value='Alabama'>Alabama</option>
                            <option value='Alaska'>Alaska</option>
                            <option value='Arizona'>Arizona</option>
                            <option value='Arkansas'>Arkansas</option>
                            <option value='California'>California</option>
                            <option value='Colorado'>Colorado</option>
                            <option value='Connecticut'>Connecticut</option>
                            <option value='Delaware'>Delaware</option>
                            <option value='Florida'>Florida</option>
                            <option value='Georgia'>Georgia</option>
                            <option value='Hawaii'>Hawaii</option>
                            <option value='Idaho'>Idaho</option>
                            <option value='Illinois'>Illinois</option>
                            <option value='Indiana'>Indiana</option>
                            <option value='Iowa'>Iowa</option>
                            <option value='Kansas'>Kansas</option>
                            <option value='Kentucky'>Kentucky</option>
                            <option value='Louisiana'>Louisiana</option>
                            <option value='Maine'>Maine</option>
                            <option value='Maryland'>Maryland</option>
                            <option value='Massachusetts'>Massachusetts</option>
                            <option value='Michigan'>Michigan</option>
                            <option value='Minnesota'>Minnesota</option>
                            <option value='Mississippi'>Mississippi</option>
                            <option value='Missouri'>Missouri</option>
                            <option value='Montana'>Montana</option>
                            <option value='Nebraska'>Nebraska</option>
                            <option value='Nevada'>Nevada</option>
                            <option value='New Hampshire'>New Hampshire</option>
                            <option value='New Jersey'>New Jersey</option>
                            <option value='New Mexico'>New Mexico</option>
                            <option value='New York'>New York</option>
                            <option value='North Carolina'>North Carolina</option>
                            <option value='North Dakota'>North Dakota</option>
                            <option value='Ohio'>Ohio</option>
                            <option value='Oklahoma'>Oklahoma</option>
                            <option value='Oregon'>Oregon</option>
                            <option value='Pennsylvania'>Pennsylvania</option>
                            <option value='Rhode Island'>Rhode Island</option>
                            <option value='South Carolina'>South Carolina</option>
                            <option value='South Dakota'>South Dakota</option>
                            <option value='Tennessee'>Tennessee</option>
                            <option value='Texas'>Texas</option>
                            <option value='Utah'>Utah</option>
                            <option value='Vermont'>Vermont</option>
                            <option value='Virginia'>Virginia</option>
                            <option value='Washington'>Washington</option>
                            <option value='West Virginia'>West Virginia</option>
                            <option value='Wisconsin'>Wisconsin</option>
                            <option value='Wyoming'>Wyoming</option>
                            <option value='District of Colombia'>District of Colombia</option>
                        </Input>
                    </Row>
                    <div className="row">
                        {this.state.users
                            .filter(item => item.firstName.toUpperCase().includes(this.state.input))
                            .map((item) => (
                                <Col s={12} m={10} l={3}>
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