import React, { Component } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap'
import styled from 'styled-components';

const ScrollyBar = styled.div`
  overflow-y: scroll;
`;

function AppStore(props) {

  function getButton(price, cpsIncrease, itemId) {
    if (props.count < price) {
      return <Button disabled>Buy</Button>
    }
    else {
      return <Button onClick={() => props.buyItem(price, cpsIncrease, itemId)}>Buy</Button>
    }
  }

  return (
    <ScrollyBar>
      <h1>Store Page</h1>
      {/*Change to call func that returns rows */}
      <Row >
        <Col>{props.dict["1"].Name}</Col>
        <Col>Cost: {props.dict["1"].amount * 5}
          <div>
            {getButton(props.dict["1"].amount * 5, 1, "1")}
          </div>
        </Col>
        <Col>Lines of code incread +1</Col>
      </Row>
      <Row >
        <Col>{props.dict["2"].Name}</Col>
        <Col>Cost: {props.dict["2"].amount * 15}
        <div>
          {getButton(props.dict["2"].amount * 15, 1, "2")}
        </div>
        </Col>
        <Col>Lines of code incread +3</Col>
      </Row>
      <Row >
        <Col>{props.dict["3"].Name}</Col>
        <Col>Cost: {props.dict["3"].amount * 50}
        <div>
          {getButton(props.dict["3"].amount * 50, 1, "3")}
        </div>
        </Col>
        <Col>Lines of code incread +5</Col>
      </Row>
    </ScrollyBar>
  );
}


export default AppStore;