import React from "react";
import { Footer } from "react-materialize";
import "./style.css";

function FooterDiv(props) {
    return(
        <Footer copyrights="2019 GardenBuddy, All rights reserved"
            moreLinks={
                <a className="grey-text text-lighten-4 right" href="#!">gardenbuddy@gmail.com</a>
            }
            links={
                <ul>
                {/* <li><a className="grey-text text-lighten-3" href="#!">Our Team</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">gardenbuddy@gmail.com</a></li> */}
                </ul>
            }
            className='example transparent'
            >
                <h5 className="white-text">About GardenBuddy</h5>
                <p className="grey-text text-lighten-4">Created by our BeLeaf team, strive to decorate your life with more colors and joy!</p>
        </Footer>
    )
}

export default FooterDiv;