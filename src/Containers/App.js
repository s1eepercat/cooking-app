import React, { Component } from 'react';
import './App.css';
import Preparation from '../Components/Preparation';
import Cooking from '../Components/Cooking';
import 'tachyons';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cooking: false
    }
  }

  cookingStart = (event) => {
    this.setState({ cooking: true });
    console.log('Start cooking!');
  }

  render() {
    const { cooking } = this.state;

    return (

      <div className="global-container">
        <h1 className='cooking-text tc'>Cooking app</h1>
        {(cooking === false) ? <Preparation cookingStart={this.cookingStart} /> : <Cooking />}
      </div>
    )

  }
}

export default App;
