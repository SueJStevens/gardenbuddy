import React from "react";
import {Card, CardTitle } from "react-materialize";
import {Link} from "react-router-dom";

function UserCard(props) {
    return(
        <Card className='medium'
            header={<CardTitle image={props.photo}>{props.firstName + " " + props.lastName}</CardTitle>}
            // actions={<Link to={{pathname: `/userdetail/${props.firstName.toLowerCase()}`, state: {id: props.id, firstName: props.firstName}}}>Detail</Link>}
            >
            <st><i className="fas fa-at"></i> Email: </st> {props.email}<br/><br/>
            <st><i className="fas fa-map-pin"></i>City: </st> {props.city}<br/><br/>
            <st><i className="fas fa-user"></i>About: </st> {props.aboutMe}
        </Card>
    )
}

export default UserCard;