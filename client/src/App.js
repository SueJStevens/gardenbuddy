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

class App extends Component {

  render() {
    return (
      <Router>
        <div className="background">
          <Switch>
            {/* this is where i think i need the routing for these compenents */}
            <Route exact path="/" component={Landing} />
            <Route exact path="/landing" component={Landing} />
            <Route path="/profile" component={Profile} />
            <Route path="/teamprofile" component={TeamProfile} />
            <Route path="/plantdetail" component={PlantDetail} />
            <Route path="/flowers" component={Flowers} />
            <Route path="/fruits" component={Fruits} />
            <Route path="/vegetables" component={Vegetables} />
            <Route path="/herbs" component={Herbs} />

          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
