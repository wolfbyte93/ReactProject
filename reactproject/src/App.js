import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



export default class App extends Component {
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
      <div className="App">
        <header className="App-header">
          <button onClick={this.clickEvent.bind(this)}><img src={logo} className="App-logo" alt="logo" /></button>
          <p>
            Click count: {this.state.count}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}



