import React, { Component } from 'react';
import './Stats.css';
import { Row, Col, Container } from 'react-bootstrap'

function Stats(props) {
  return (
    <div>STATS WILL BE HERE I THINK
      <Row>
        <Col>{props.dict["1"].Name}: {props.dict["1"].amount}</Col>
      </Row>
      <Row>
        <Col>{props.dict["2"].Name}: {props.dict["2"].amount}</Col>
      </Row>
      <Row>
        <Col>{props.dict["3"].Name}: {props.dict["3"].amount}</Col>
      </Row>
    </div>

  );


}
export default Stats;