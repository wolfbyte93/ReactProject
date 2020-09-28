import React, { Component } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap'
import styled from 'styled-components';

const ScrollyBar = styled.div`
  overflow-y: scroll;
`;

function AppStore(props) {

  function getButton(price, cpsIncrease) {
    if (props.count < price) {
      return <Button disabled>Buy</Button>
    }
    else {
      return <Button onClick={() => props.buyItem(price, cpsIncrease)}>Buy</Button>
    }
  }

  return (
    <ScrollyBar>
      <h1>Store Page</h1>
      {/*Change to call func that returns rows */}
      <Row >
        <Col>Bag of Chalk</Col>
        <Col>Cost: 5
          <div>
            {getButton(5, 1)}
          </div>
        </Col>
        <Col>Lines of code incread +1</Col>
      </Row>
      <Row >
        <Col>Ben and jerry's tub</Col>
        <Col>Cost: 15
        <div>
            {getButton(15, 3)}
        </div>
        </Col>
        <Col>Lines of code incread +3</Col>
      </Row>
      <Row >
        <Col>Backrub from Dan</Col>
        <Col>Cost: 50
        <div>
            {getButton(50, 5)}
        </div>
        </Col>
        <Col>Lines of code incread +5</Col>
      </Row>
    </ScrollyBar>
  );
}


export default AppStore;