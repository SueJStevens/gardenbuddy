import React from "react";
import "./style.css";
import { Button, Modal, Row, Input } from "react-materialize";
import SearchCategoryBar from "../SearchCategoryBar";

function NewComerIns(props) {
    return(
        <div className="instruction">
            <hr />
            {/* <h3>New here? No worries.</h3> */}
            <h5><b>New here? </b>Here are some steps to get you started...</h5>
            <Modal
                header='Follow the steps to find out suitable plants to grow'
                fixedFooter
                trigger={<Button waves="light" className="amber darken-1">Start</Button>}
                className="yellow lighten-5">
                    <Row>
                        <Input s={12} type='select' label="Choose a category" defaultValue='2'>
                            <option defaultValue='default'>Select One</option>
                            <option value='flowers'>Flowers</option>
                            <option value='vegetables'>Vegetables</option>
                            <option value='fruits'>Fruits</option>
                            <option value='herbs'>Herbs</option>
                        </Input>
                    </Row>
                    <SearchCategoryBar />
                    <h5 id="result">Checkout them out here!</h5>
                    <div className="results"></div>
            </Modal>
        </div>
    )
}

export default NewComerIns;