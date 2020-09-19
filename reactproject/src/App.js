import React, { Component } from 'react';
import './App.css';
import Nathan from './Components/Nathan'
import AppStore from './Components/AppStore'
import Stats from './Components/Stats'
import { Row, Col, Container } from 'react-bootstrap'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.clickEvent = this.clickEvent.bind(this);
    this.buyAThing = this.buyAThing.bind(this);
  }

  clickEvent() {
    this.setState({
      count: this.state.count + 1
    })
  }

  buyAThing(price)
  {
    this.setState({
      count: this.state.count - price
    })
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Container>
            <Row>
              <Col>
                <AppStore count={this.state.count} onclick={this.buyAThing}></AppStore>
              </Col>
              <Col>
                <Nathan clickEvent = {this.clickEvent} count={this.state.count}></Nathan>
              </Col>
              <Col>
                <Stats count={this.state.count} ></Stats>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}



