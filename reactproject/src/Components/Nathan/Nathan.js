import React, { Component } from 'react';
import nathan from './Nathan.jpg';
import './Nathan.css';
import {Row, Col, Container} from 'react-bootstrap'


export default class Nathan extends Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }
  
    clickEvent() {
      this.setState({
        count: this.state.count + 1
      })
    }
  
    render() {
      return (
        <Col>
            <h1>Welcome to Nathan clicker!</h1>
            <button className="clicker-button" onClick={this.clickEvent.bind(this)}><img src={nathan} className="App-logo" alt="logo" /></button>
            <p>
              Lines of code: {this.state.count}
            </p>
        </Col>
      );
    }
  }