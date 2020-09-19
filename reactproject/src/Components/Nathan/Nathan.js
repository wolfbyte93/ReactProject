import React, { Component } from 'react';
import nathan from './Nathan.jpg';
import './Nathan.css';
import {Row, Col, Container} from 'react-bootstrap'


export default class Nathan extends Component {
    constructor(props) {
      super(props);
    }
  

    render() {
      return (
        <div>
            <h1>Welcome to Nathan clicker!</h1>
            <button className="clicker-button" onClick={this.props.clickEvent}><img src={nathan} className="App-logo" alt="logo" /></button>
            <p>
              Lines of code: {this.props.count}
            </p>
        </div>
      );
    }
  }