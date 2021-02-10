import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      btn: 'Iniciar'
    };
    this.timer = null;
    this.go = this.go.bind(this);
    this.reset = this.reset.bind(this);
  }

  go(){
    let state = this.state;

    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;  
      state.btn = 'Continuar';    
    } else {
      this.timer = setInterval(()=>{
        let state = this.state;
        state.number += 0.01;
        this.setState(state);
      },10);
      state.btn = 'Parar';
    }

    this.setState(state);
  }

  reset(){
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;   
    }

    let state = this.state;
    state.number = 0;
    state.btn = 'Iniciar';
    this.setState(state);
  }

  render(){
    return (
      <div className="container">
        <a className="timer">{this.state.number.toFixed(2)}</a>
        <div className="areaBtn">
          <a className="btn" onClick={this.go}>{this.state.btn}</a>
          <a className="btn" onClick={this.reset}>Zerar</a>
        </div>
      </div>
    );
  }
}

export default App;
