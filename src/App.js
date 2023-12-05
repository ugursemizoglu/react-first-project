import React, { Component } from "react";
import Navi from "./FrontEnd/Header/Navi";
import CategoryList from "./FrontEnd/Middle/CategoryList";
import ProductList from "./FrontEnd/Middle/ProductList";
import { Col, Container, Row } from "reactstrap";

export default class App extends Component{
  state={currentCategory:""}
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };
  render(){
  let NaviList = {title:"NaviList"};
  let productInfo = {title:"ProductList"};
  let categoryInfo = {title:"CategoryList"};
    return (
      <div>
        <Container>
          <Row>
            <Navi info={NaviList} />
          </Row>
          <Row>
            <Col xs="4">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>
            <Col xs="8">
              <ProductList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={productInfo} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

