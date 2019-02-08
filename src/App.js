import React, { Component } from 'react';
import './App.css';

const keyboard = ["MC", "M+", "&#247;", "&#215;", "7", "8", "9", "&#8722;", "4", "5", "6", "&#43;", "1", "2", "3", "&#61;", "0", "."]

class Calculator extends React.Component {
  state = {
    total: 0,
    equation: "",
  }

  clearScreen = () => {
    this.setState({
      total: 0,
      equation: "",
    });
  }

  enterEquation = (event) => {
    this.setState({
      total: event.target.value,
      equation: this.state.equation += event.target.value
    });
  }

  equationEquals = () => {
    let solution = eval(this.state.equation);
    this.setState({ total: solution });
  }

  render() {
    return (
      <main id="calc-body">
        <section id="view-screen-container">
          <input id="view-screen"
                 type="text"
                 value={this.state.total}
                 pattern="[\d\+\-\*\/\.]*" />
        </section>
        <section id="calc-btn-section">
          <button onClick={this.clearScreen}
                  class="black-btn" id="mc" value="0">MC</button>
          <button class="black-btn" id="mplus">M+</button>
          <button class="black-btn" id="div-sign" value="/">&#247;</button>
          <button onClick={this.enterEquation}
                  class="black-btn" id="x-sign" value="*">&#215;</button>
          <button onClick={this.enterEquation}
                  class="gray-btn" id="7" value="7">7</button>
          <button class="gray-btn" id="8" value="8">8</button>
          <button class="gray-btn" id="9" value="9">9</button>
          <button class="gray-btn" id="minus" value="-">&#8722;</button>
          <button class="gray-btn" id="4" value="4">4</button>
          <button class="gray-btn" id="5" value="5">5</button>
          <button class="gray-btn" id="6" value="6">6</button>
          <button class="gray-btn" id="plus" value="+">&#43;</button>
          <button class="gray-btn" id="1" value="1">1</button>
          <button class="gray-btn" id="2" value="2">2</button>
          <button class="gray-btn" id="3" value="3">3</button>
          <button onClick={this.equationEquals}
                  class="red-btn" id="equals" value="equals">&#61;</button>
          <button class="gray-btn" id="zero" value="0">0</button>
          <button onClick={this.enterEquation} class="gray-btn" id="decimal" value=".">.</button>
        </section>
      </main>
    )
  }
}

export default Calculator;
