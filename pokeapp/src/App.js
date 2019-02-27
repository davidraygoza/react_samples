import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
class App extends Component {
  suma(){
    return <p>{10+2}</p>;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title />
          <p>{this.suma()}</p>
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

export default App;
