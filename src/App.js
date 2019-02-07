import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main id="calc-body">
          <section id="calc-section">
            <input id="view-screen" type="number" />
          </section>
          <section id="calc-btn-section">
            <button className="black-btn" id="mc">MC</button>
            <button className="black-btn" id="mplus">M+</button>
            <button className="black-btn" id="div-sign">&#247;</button>
            <button className="black-btn" id="x-sign">&#215;</button>
            <button className="gray-btn" id="7">7</button>
            <button className="gray-btn" id="8">8</button>
            <button className="gray-btn" id="9">9</button>
            <button className="gray-btn" id="minus">&#8722;</button>
            <button className="gray-btn" id="4">4</button>
            <button className="gray-btn" id="5">5</button>
            <button className="gray-btn" id="6">6</button>
            <button className="gray-btn" id="plus">&#43;</button>
            <button className="gray-btn" id="1">1</button>
            <button className="gray-btn" id="2">2</button>
            <button className="gray-btn" id="3">3</button>
            <button className="red-btn" id="equals">&#61;</button>
            <button className="gray-btn" id="zero">0</button>
            <button className="gray-btn" id="decimal">.</button>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
