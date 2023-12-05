import React, { Component } from 'react'
import Menu from './Menu'
import Logo from './Logo'
import { Col, Container, Row } from 'reactstrap'

export default class Navi extends Component {
  constructor(props){
    super(props);
    this.state={}
  }
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <Container>
          <Row>
            <Col xs="4">
              <Logo></Logo>
            </Col>
            <Col xs="8">
              <Menu></Menu>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
