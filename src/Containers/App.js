import React, { Component } from 'react';
import './App.css';
import Preparation from '../Components/Preparation';
import Cooking from '../Components/Cooking';
import 'tachyons';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cooking: false, //To trigger cooking rendering
      recipe: [{}] //Has an empty object inside as we already have the first line
    }
  }

  cookingStart = (event) => {
    this.setState({ cooking: true });

    console.log('Start cooking!');
    console.log(this.state);
  }

  addEmptyArr = () => { //Rewrites state recipe with an added array recipe
    this.setState(() => {
      let newObj = {};
      let recipeClone = this.state.recipe;
      recipeClone.push(newObj);
      return recipeClone;
    })
  }

  fillRecipe = (event) => {
    let currentLine = event.target.parentNode.className - 1;
    let inputName = event.target.placeholder;
    let value = event.target.value;
    let updatedRecipe = this.state.recipe;

    this.setState(() => {

      if (inputName === "food") {
        updatedRecipe[currentLine].food = value;
      } else if (inputName === "action") {
        updatedRecipe[currentLine].action = value;
      } else if (inputName === "time") {
        updatedRecipe[currentLine].time = value;
      };

      console.log(updatedRecipe);
      return updatedRecipe;
    })
  }

  render() {
    const { cooking } = this.state;

    return (

      <div className="global-container" >
        <h1 className='cooking-text tc'>Cooking app</h1>
        {(cooking === false) ?
          <Preparation
            cookingStart={this.cookingStart}
            addEmptyArr={this.addEmptyArr}
            fillRecipe={this.fillRecipe}
          /> : <Cooking />}
      </div>
    )

  }
}

export default App;
