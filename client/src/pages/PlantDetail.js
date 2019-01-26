import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavBar from "../components/Navbar";

export default class PlantDetail extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <NavBar />
      </div>
    )
  }
}
