import React, { Component } from 'react';
import './App.css';
import Preparation from './Preparation';
import Cooking from './Cooking';
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
    let currentLine = event.target.parentNode.className;
    let inputName = event.target.placeholder;
    let value = event.target.value;
    let updatedRecipe = this.state.recipe;

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
        <h1 className='cooking-text tc'>Cooking app</h1>
        {(cooking === false) ?
          <Preparation
            cookingStart={this.cookingStart}
            addLine={this.addLine}
            fillRecipe={this.fillRecipe}
          /> : <Cooking finishedRecipe={this.state.recipe} />}
      </div>
    )

  }
}

export default App;
