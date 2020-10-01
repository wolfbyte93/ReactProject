import React, { Component } from 'react';
import nathan from './Nathan.jpg';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const NathanButton = styled.button`
  animation: ${rotate} infinite ${(props) => 100000 / props.spin}s linear;
  border-radius: 50%;
`;


function Nathan(props) {
  return (
    <div>
      <h1>Welcome to Nathan clicker!</h1>
      <NathanButton spin={props.count} onClick={props.clickEvent}><img size={props.count} src={nathan} className="App-logo" alt="logo" /></NathanButton>
      <p>
        Lines of code: {props.roundedCount}
      </p>
      <p>
        Lines per seconds: {props.actualCps}
      </p>
    </div>
  );
}
export default Nathan;