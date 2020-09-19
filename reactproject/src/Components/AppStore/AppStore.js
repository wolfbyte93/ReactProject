import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap'


export default class AppStore extends Component{
    constructor(props) {
        super(props);
      }

    render() {
        return (
          <Col>
              <h1>Store Page</h1>
              {/*Change to call func that returns rows */}
              <Row >
                <Col>Item</Col>
                <Col>Price</Col>
        <Col>Number you have </Col>
              </Row>
              <Row >
                <Col>Item</Col>
                <Col>Price</Col>
                <Col>Number you have</Col>
              </Row>
              <Row >
                <Col>Item</Col>
                <Col>Price</Col>
                <Col>Number you have</Col>
              </Row>
              <p>Buy Item here: </p>
          </Col>
        );
      }
}