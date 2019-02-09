import React, { Component } from "react";
import "./style.css";
import { Card, Table } from "react-materialize";
import API from "../../utils/API";

// By extending the React.Component class, Counter inherits functionality from it
class AboutMe extends Component {

    state = {
        gardenSize: 0
    }

    constructor(props) {
        super(props);
        let userName = this.props.user.username;
        API.getVirtualGarden(userName).then((res) => {

            // If the user has no virtual plants in their virtual garden yet,
            // set 'my_plants' to an empty array.
            // Else, sort the virtual garden so that the plants whose watering
            // is overdue are displayed first
            // console.log("Got virtual garden length " + res.data.length)
            this.setState({gardenSize: res.data.length})

        });
    }


    render() {
        // The render method returns the JSX that should be rendered
        return (
            <wrapper className="container">
                <Card className="hoverable" title='About Me'
                // actions={[<a href='#'><i className="fas fa-pencil-alt"></i> Click Here To Edit</a>]}
                >
                    <Table className="striped">
                        <tbody>
                            <tr>
                                <td className="thead"><i className="fas fa-seedling"></i>First Name: </td>
                                <td>{this.props.user.firstName}</td>
                            </tr>
                            <tr>
                                <td className="thead"><i className="fas fa-seedling"></i>Last Name: </td>
                                <td>{this.props.user.lastName}</td>
                            </tr>
                            <tr>
                                <td className="thead"><i className="fas fa-seedling"></i>Plants in My Garden: </td>
                                <td>{this.state.gardenSize}</td>
                            </tr>
                            <tr>
                                <td className="thead"><i className="fas fa-seedling"></i>Friends: </td>
                                <td>35</td>
                            </tr>
                            <tr>
                                <td className="thead"><i className="fas fa-seedling"></i>About Me: </td>
                                <td>{this.props.user.aboutme}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>
            </wrapper>
        );
    }
};

export default AboutMe;


