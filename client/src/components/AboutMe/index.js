import React from "react";
import "./style.css";
import { Card, Table } from "react-materialize";

// By extending the React.Component class, Counter inherits functionality from it
function AboutMe(props) {

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
                            <td>{props.user.firstName}</td>
                        </tr>
                        <tr>
                            <td className="thead"><i className="fas fa-seedling"></i>Last Name: </td>
                            <td>{props.user.lastName}</td>
                        </tr>
                        <tr>
                            <td className="thead"><i className="fas fa-seedling"></i>Plants in My Garden: </td>
                            <td>{props.gardenSize}</td>
                        </tr>
                        <tr>
                            <td className="thead"><i className="fas fa-seedling"></i>Friends: </td>
                            <td>35</td>
                        </tr>
                        <tr>
                            <td className="thead"><i className="fas fa-seedling"></i>About Me: </td>
                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</td>
                        </tr>
                    </tbody>
                </Table>
            </Card>
        </wrapper>
    );
};

export default AboutMe;


