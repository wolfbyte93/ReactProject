import React, { Component } from 'react';
import nathan from './Nathan.jpg';
import './Nathan.css';


function Nathan(props) {

  return (
    <div>
      <h1>Welcome to Nathan clicker!</h1>
      <button className="clicker-button" onClick={props.clickEvent}><img src={nathan} className="App-logo" alt="logo" /></button>
      <p>
        Lines of code: {props.count}
      </p>
      <p>
        Lines per seconds: {props.actualCps}
      </p>
    </div>
  );
}
export default Nathan;