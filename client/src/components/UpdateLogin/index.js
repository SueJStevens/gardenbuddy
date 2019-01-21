import React from "react";
// import "./style.css";
import { Card } from "react-materialize";

// By extending the React.Component class, Counter inherits functionality from it
function UpdateLogin(props) {

    // The render method returns the JSX that should be rendered
    return (
        <wrapper className="container">
            <Card className="hoverable" title='Update Login' actions={[<a href='#'><i className="fas fa-pencil-alt"></i> Submit Updated Information</a>]}>
                <table className="">
                    <tbody>
                        <tr>
                            <td className="user-info"><i class="fas fa-user"></i>Username:</td>
                            <td><input value="Test User" /></td>
                        </tr>
                        <tr>
                            <td className="user-info"><i class="fas fa-envelope"></i>Email:</td>
                            <td><input value="test@user.com" /></td>
                        </tr>
                        <tr>
                            <td className="user-info"><i class="fas fa-key"></i>Password:</td>
                            <td><input placeholder="******" /></td>
                        </tr>
                    </tbody>
                </table>
            </Card>
        </wrapper>
    );
};

export default UpdateLogin;


