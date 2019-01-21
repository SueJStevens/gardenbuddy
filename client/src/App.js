import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Landing from "./pages/landing";
import Profile from "./pages/Profile";

class App extends Component {

  render() {
    return (
      <div>
        <Landing />
        {/* <Profile /> */}
        {/* <NavBar />
        <Carousel images={[
  'https://lorempixel.com/250/250/nature/1',
  'https://lorempixel.com/250/250/nature/2',
  'https://lorempixel.com/250/250/nature/3',
  'https://lorempixel.com/250/250/nature/4',
  'https://lorempixel.com/250/250/nature/5'
]} /> */}
      </div>

    );
  }
}

export default App;
