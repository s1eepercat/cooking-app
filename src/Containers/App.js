import React, { Component } from 'react';
import './App.css';
import Preparation from './Preparation';
import Cooking from './Cooking';

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
  }

  addLine = () => { //Rewrites state recipe with an added array recipe
    this.setState(() => {
      let newObj = {};
      let recipeClone = this.state.recipe;
      recipeClone.push(newObj);
      return recipeClone;
    })
  }

  fillRecipe = (event) => {
    let currentLine = event.target.parentNode.id;
    let inputName = event.target.id;
    let value = event.target.value;
    let updatedRecipe = this.state.recipe;

    if (!isNaN(value) && inputName === 'time') {
      if (value < 0) {
        value = 1
      } else if (value > 300) {
        value = 300;
      }
    }

    this.setState(() => {
      if (inputName === "food") {
        updatedRecipe[currentLine - 1].food = value;
      } else if (inputName === "action") {
        updatedRecipe[currentLine - 1].action = value;
      } else if (inputName === "time") {
        updatedRecipe[currentLine - 1].time = value;
      };

      return updatedRecipe;
    })
  }

  render() {
    const { cooking } = this.state;

    return (
      <div className="global-container" >
        <h1 className='cooking-text'>Cooking Upp</h1>
        {(!cooking) ?
          <Preparation
            cookingStart={this.cookingStart}
            addLine={this.addLine}
            fillRecipe={this.fillRecipe}
          /> :
          <Cooking
            finishedRecipe={this.state.recipe}
          />}
      </div>
    )

  }
}

export default App;
