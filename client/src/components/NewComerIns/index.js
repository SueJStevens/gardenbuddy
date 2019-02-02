import React from "react";
import "./style.css";
import { Button, Modal, Row, Input } from "react-materialize";
import SearchBar from "../SearchBar";

function NewComerIns(props) {
    return(
        <div className="instruction">
            <Modal
                header='Follow the steps to find out suitable plants to grow'
                bottomSheet
                trigger={<Button waves="light" className="amber darken-1">Click to start</Button>}
                className="yellow lighten-5">
                    <SearchBar />
                    <Row>
                        <Input s={12} type='select' label="Choose a category" defaultValue='2'>
                            <option defaultValue='default'>Select One</option>
                            <option value='flowers'>Flowers</option>
                            <option value='vegetables'>Vegetables</option>
                            <option value='fruits'>Fruits</option>
                            <option value='herbs'>Herbs</option>
                        </Input>
                    </Row>
                    <h5 id="result">Checkout them out here!</h5>
                    <div className="results"></div>
            </Modal>
        </div>
    )
}

export default NewComerIns;