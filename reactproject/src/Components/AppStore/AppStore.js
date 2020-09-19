import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap'


export default class AppStore extends Component{
    constructor(props) {
        super(props);
        this.state = { count: 0 };
      }

    render() {
        return (
          <Col>
              <h1>Store Page</h1>
              <p>Buy Item here: {this.state.count}</p>
          </Col>
        );
      }
}