import React, { Component } from "react";
// import { Table } from "reactstrap";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state= {
    }
  }
  render() {
    return (
      <div>
        <h3>{this.props.info.title} - {this.props.currentCategory}</h3>
      </div>
    );
  }
}
