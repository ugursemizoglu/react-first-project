import React, { Component } from 'react';
import logo from "./logo.jpg";

export default class Logo extends Component {
  render() {
    return (
      <div>
        <img
    alt="Logo"
    src={logo} width={100}

  />
      </div>
    )
  }
}
