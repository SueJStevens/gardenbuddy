import React from "react";
// import "./style.css";
import Notification from "../Notification";
import { Card, Table } from "react-materialize";

// By extending the React.Component class, Counter inherits functionality from it
function NotificationsList(props) {

    // The render method returns the JSX that should be rendered
    return (
        <wrapper className="container">
            <Card className="hoverable" title='Notifications'>
                <Table className="highlight" bordered>
                    <thead>
                        <tr>
                            <th><i className="fas fa-bell"></i></th>
                            <th>Date</th>
                            <th>From</th>
                            <th>Message</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Notification />
                        <Notification />
                        <Notification />
                        <Notification />
                        <Notification />
                    </tbody>
                </Table>
            </Card>
        </wrapper>
    );
};

export default NotificationsList;


