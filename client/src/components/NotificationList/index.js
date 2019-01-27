import React, { Component } from "react";
// import "./style.css";
import Notification from "../Notification";
import { Card, Table } from "react-materialize";

// By extending the React.Component class, Counter inherits functionality from it
class NotificationsList extends Component {

    state = {
        name: "value"
    }

    changeNotificationStatus = (id) => {
        console.log(id);
        //TODO: use the passed in ID to find the relevant notification and update its completed status to true

        //TODO: we also need a way to make sure the checkbox is already checked off if the notification is completed

        //TODO: lastly, remove the red icon next to said notification
        // document.getElementById(id)
    }

    // The render method returns the JSX that should be rendered
    render() {

        return (
            <wrapper className="container">
                <Card className="hoverable" title='Notifications'>
                    <form>
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
                                <Notification click={this.changeNotificationStatus} />
                            </tbody>
                        </Table>
                    </form>
                </Card>
            </wrapper>
        );
    }
};

export default NotificationsList;





