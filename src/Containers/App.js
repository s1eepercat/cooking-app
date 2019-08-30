import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cooking: false
    }
  }

  render() {
    return (
      <div>
        <h1>Cooking app</h1>
      </div>
    )
  }
}

export default App;
