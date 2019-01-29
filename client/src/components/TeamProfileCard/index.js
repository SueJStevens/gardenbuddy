import React from "react";
import "./style.css";
import { Card, CardTitle } from "react-materialize";

function TeamProfileCard(props) {
    return(
        <div className="col s3">
            <div className="card medium">
                <div className="card-image">
                    <img alt={props.name} src={props.image} />
                    <span className="card-title">{props.name}</span>
                </div>
                <div className="card-content">
                    <p>Short intro for yourself?</p>
                </div>
                <div className="card-action">
                    <a href={props.personalWebLink}><i class="fas fa-home fa-lg"></i></a>
                    <a href={props.github}><i class="fab fa-github fa-lg"></i></a>
                </div>
            </div>
        </div>       
    )
}

export default TeamProfileCard;