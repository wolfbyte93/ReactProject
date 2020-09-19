import React, { Component } from 'react';
import './App.css';
import Nathan from './Components/Nathan'
import AppStore from './Components/AppStore'
import {Row, Col, Container} from 'react-bootstrap'


export default class App extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="App">
          <div className="App-header">
            <Container>
              <Row>
                <AppStore></AppStore>
                <Nathan></Nathan>
              </Row>
            </Container>
          </div>
        </div>
      
    );
  }
}



