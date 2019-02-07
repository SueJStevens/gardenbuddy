import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PlantDetail from "./pages/PlantDetail";
import './App.css';
import Landing from "./pages/landing";
import Profile from "./pages/Profile";
import TeamProfile from "./pages/teamProfile";
import Flowers from "./pages/flowers";
import Fruits from "./pages/fruits";
import Vegetables from './pages/vegetables';
import Herbs from './pages/herbs';
import axios from 'axios';
import Swal from 'sweetalert2';

class App extends Component {

  constructor() {
    super()
    this.state = {
      username: "",
      password: "",
      phone: "",
      firstName: "Friend",
      lastName: "",
      zipcode: "",
      city: "",
      st: "",
      aboutme: "",
      redirectTo: null,
      loggedIn: false
    }
    this.handleSignup = this.handleSignup.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    axios.get("/auth/user").then((response) => {
      console.log(response.data);

      if (response.data) {
      this.setState({
        _id: response.data._id,
        username: response.data.username,
        phone: response.data.phone,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        zipcode: response.data.zipcode,
        city: response.data.city,
        st: response.data.st,
        aboutme: response.data.aboutme,
        redirectTo: null,
        loggedIn: true
      })
    }
    })
  }

  handleChange(event) {
    console.log("typing");
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSignup(event) {
    event.preventDefault()
    // TODO - validate!
    axios.post("/auth/signup", {
      password: this.state.password,
      username: this.state.username,
      phone: this.state.phone,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      zipcode: this.state.zipcode,
      city: this.state.city,
      st: this.state.st,
      aboutme: this.state.aboutme

    })
      .then(response => {
        this.setState({redirectTo: "/landing"})
        console.log(response)
        Swal.fire({
          title: 'Account Created',
          text: 'Please Login',
          type: 'success',
          showConfirmButton: false,
          showCancelButton: false,
          backdrop: true,
          // toast: true,
          timer: 1100,
          // position: "top-end",
          customClass: "success-toast"
          // confirmButtonText: 'Ok'
        });
      })
  }

  handleLogin(event) {
    event.preventDefault();

    // $('.modal.open').modal('close')

    var loginModal = document.getElementById("login-modal")
    loginModal.classList.add("closeModal");

    var loginModalOverlay = document.getElementById("materialize-modal-overlay-1");
    loginModalOverlay.classList.add("closeModal")
    // loginModalOverlay.classList.remove("modal-overlay")

    axios.post("auth/login", {
      username: this.state.username,
      password: this.state.password
    }).then(response => {
      // console.log(response);
      this.setState({
        _id: response.data._id,
        username: response.data.username,
        phone: response.data.phone,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        zipcode: response.data.zipcode,
        city: response.data.city,
        st: response.data.st,
        aboutme: response.data.aboutme,
        redirectTo: "/profile",
        loggedIn: true
      })
      if (response) {

        Swal.fire({
          title: 'Successfully Logged In',
          type: 'success',
          showConfirmButton: false,
          showCancelButton: false,
          backdrop: true,
          // toast: true,
          timer: 1100,
          // position: "top-end",
          customClass: "success-toast"
          // confirmButtonText: 'Ok'
        });
      } else if (response.status === 401) {
        Swal.fire({
          title: 'Error Logging In',
          type: 'error',
          showConfirmButton: false,
          showCancelButton: false,
          // toast: true,
          timer: 1000,
          // position: "top-end",
          customClass: "fail-toast"
          // confirmButtonText: 'Ok'
        });
      }

    }).then((response2) => {
      console.log(response2);
      this.setState({redirectTo: null})
    } )
  }


  render() {
    return (
      <Router>
        <div className="background">
          <Switch>
            <Route exact path="/" render={(props) => <Landing {...props} user={this.state} onChange={this.handleChange} handleLogin={this.handleLogin} handleSignup={this.handleSignup} />} />
            <Route exact path="/landing" render={(props) => <Landing {...props} user={this.state} onChange={this.handleChange} handleLogin={this.handleLogin} handleSignup={this.handleSignup} />} />
            <Route path="/profile" render={(props) => <Profile {...props} user={this.state} />} />
            <Route path="/teamprofile" render={(props) => <TeamProfile {...props} user={this.state} onChange={this.handleChange} handleLogin={this.handleLogin} handleSignup={this.handleSignup} />} />
            <Route path="/plantdetail" render={(props) => <PlantDetail {...props} user={this.state} onChange={this.handleChange} handleLogin={this.handleLogin} handleSignup={this.handleSignup} />} />
            <Route path="/flowers" render={(props) => <Flowers {...props} user={this.state} onChange={this.handleChange} handleLogin={this.handleLogin} handleSignup={this.handleSignup} />} />
            <Route path="/fruits" render={(props) => <Fruits {...props} user={this.state} onChange={this.handleChange} handleLogin={this.handleLogin} handleSignup={this.handleSignup} />} />
            <Route path="/vegetables" render={(props) => <Vegetables {...props} user={this.state} onChange={this.handleChange} handleLogin={this.handleLogin} handleSignup={this.handleSignup} />} />
            <Route path="/herbs" render={(props) => <Herbs {...props} user={this.state} onChange={this.handleChange} handleLogin={this.handleLogin} handleSignup={this.handleSignup} />} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
