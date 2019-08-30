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

    return (cooking === false) ? (
      <div>
        <h1 className='tc'>Cooking app</h1>
        <Preparation cookingStart={this.cookingStart} />
      </div>
    ) : (
        <div>
          <h1 className='tc'>Cooking app</h1>
          <Cooking />
        </div>
      )
  }
}

export default App;
