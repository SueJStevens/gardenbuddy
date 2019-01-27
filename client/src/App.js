import React, { Component } from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Landing from "./pages/landing";
import Profile from "./pages/Profile";
import TeamProfile from "./pages/teamProfile";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            {/* this is where i think i need the routing for these compenents */}
            <Route exact path="/" component={Landing} />
            <Route exact path="/landing" component={Landing} />
            <Route path="/profile" component={Profile} />
            <Route path="/teamprofile" component={TeamProfile} />

          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
