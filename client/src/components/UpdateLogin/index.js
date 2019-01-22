import React from "react";
// import "./style.css";
import { Card, Table } from "react-materialize";

// By extending the React.Component class, Counter inherits functionality from it
function UpdateLogin(props) {

    // The render method returns the JSX that should be rendered
    return (
        <wrapper className="container">
            <Card className="hoverable" title='Update Login' actions={[<a href='#'><i class="fas fa-share-square"></i> Submit Updated Information</a>]}>
                <Table className="">
                    <tbody>
                        <tr>
                            <td className="user-info"><i className="fas fa-user"></i>Username:</td>
                            <td><input value="Test User" /></td>
                        </tr>
                        <tr>
                            <td className="user-info"><i className="fas fa-envelope"></i>Email:</td>
                            <td><input value="test@user.com" /></td>
                        </tr>
                        <tr>
                            <td className="user-info"><i className="fas fa-key"></i>Password:</td>
                            <td><input placeholder="******" /></td>
                        </tr>
                    </tbody>
                </Table>
            </Card>
        </wrapper>
    );
};

export default UpdateLogin;


