import React from "react";
// import "./style.css";
import {Modal, Button} from "react-materialize";

// By extending the React.Component class, Counter inherits functionality from it
function Login(props) {

    // The render method returns the JSX that should be rendered
    return (
        <Modal
            header='Modal Header'
            trigger={<Button>MODAL</Button>}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </Modal>
    );
};

export default Login;
