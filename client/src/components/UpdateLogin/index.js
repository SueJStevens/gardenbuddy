import React from "react";
// import "./style.css";
import { Card, Table } from "react-materialize";

// By extending the React.Component class, Counter inherits functionality from it
function UpdateLogin(props) {

    // The render method returns the JSX that should be rendered
    return (
        <wrapper className="container">
            <Card className="hoverable" title='Update Login' 
            // actions={[<a href='#'><i class="fas fa-share-square"></i> Submit Updated Information</a>]}
            >
                <Table className="">
                    <tbody>
                        <tr>
                            <td className="thead"><i className="fas fa-envelope"></i>Email:</td>
                            <td><input placeholder={props.user.username} /></td>
                        </tr>
                        <tr>
                            <td className="thead"><i className="fas fa-key"></i>Password:</td>
                            <td><input placeholder="******" /></td>
                        </tr>
                    </tbody>
                </Table>
            </Card>
        </wrapper>
    );
};

export default UpdateLogin;


