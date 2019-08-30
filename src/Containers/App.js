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
      recipe: [[]] //Has an empty array inside as we already have the first line
    }
  }

  cookingStart = (event) => {
    this.setState({ cooking: true });

    console.log('Start cooking!');
    console.log(this.state);
  }

  addEmptyArr = () => { //Rewrites state recipe with an added array recipe
    this.setState(() => {
      let newArr = [];
      let recipeClone = this.state.recipe;
      recipeClone.push(newArr);
      return recipeClone;
    })
  }

  fillRecipe = (event) => {
    // let length = this.state.recipe.length;

    const currentLine = event.target.parentNode.className;
    const inputName = event.target.placeholder;
    const updatedRecipe = this.state.recipe;

    this.setState(() => {

      let col = 0;

      if (inputName === "food") {
        col = 0
      } else if (inputName === "action") {
        col = 1
      } else if (inputName === "time") {
        col = 2
      };

      updatedRecipe[currentLine][col] = event.target.value;
      console.log(updatedRecipe);

      return updatedRecipe;
    })
  }

  render() {
    const { cooking } = this.state;

    return (

      <div className="global-container">
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
