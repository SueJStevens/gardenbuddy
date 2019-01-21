import React from "react";
import "./style.css";
import NotificationIcon from "../NotificationIcon";

// By extending the React.Component class, Counter inherits functionality from it
function Notification(props) {

    // The render method returns the JSX that should be rendered
    return (
            <tr className="notification-row">
                <td className="notification-icon-row"><NotificationIcon /></td>
                <td className="notification-date">2 hours ago</td>
                <td className="notification-sender">Sender</td>
                <td className="notification-message">"I noticed you live in the region and have a lot of awesome plants! Any tips?"</td>
                <td className="notification-checkbox">
                    <div className="checkbox-div">
                        <input className="check-icon" type="checkbox" />
                        <label id="cbx"></label>
                    </div>
                </td>
            </tr>
    );
};

export default Notification;


