import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
class App extends Component {
  suma(){
    return <p>{10+2}</p>;
  }
  constructor(props){
    super(props);
    this.state = {
      counter : 0
    }
  }
  aumentar(){
      this.setState({
        counter : this.state.counter + 1
      })
  }
  reiniciar(){
    this.setState({
      counter : 0
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title nameDeveloper="David I. Raygoza" profileDeveloper="FrontEnd Developer" linkedinProfile="https://www.linkedin.com/in/davidraygoza/"/>
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
        <h1>{this.state.counter}</h1>
        <h2>Dame click</h2>
        <button onClick={()=>{this.aumentar()}}> Presiona</button>
        <button onClick={()=>{this.reiniciar()}}> Reiniciar</button>

      </div>
    );
  }
}

export default App;
