import React from "react";
import "./style.css";
import { Card } from "react-materialize";

// By extending the React.Component class, Counter inherits functionality from it
function ContactInfo(props) {

    // The render method returns the JSX that should be rendered
    return (
        <wrapper className="container">
            <Card className="hoverable" title='Contact Info' 
            // actions={[<a href='#'><i className="fas fa-pencil-alt"></i> Click Here To Edit</a>]}
            >
                <table className="striped">
                    <tbody>
                        <tr>
                            <td className="user-info"><i className="fas fa-file-signature"></i>First Name:</td>
                            <td>Test</td>
                        </tr>
                        <tr>
                            <td className="user-info"><i className="fas fa-file-signature"></i>Last Name:</td>
                            <td>User</td>
                        </tr>
                        <tr>
                            <td className="user-info"><i className="fas fa-at"></i>Email:</td>
                            <td>test@user.com</td>
                        </tr>
                        <tr>
                            <td className="user-info"><i className="fas fa-phone"></i>Phone:</td>
                            <td>619-999-0000</td>
                        </tr>
                        <tr>
                            <td className="user-info"><i className="fas fa-map-marked-alt"></i>Zipcode</td>
                            <td>92103</td>
                        </tr>
                        <tr>
                            <td className="user-info"><i className="fas fa-map-marked-alt"></i>City:</td>
                            <td>San Diego</td>
                        </tr>
                    </tbody>
                </table>
            </Card>
        </wrapper>
    );
};

export default ContactInfo;


