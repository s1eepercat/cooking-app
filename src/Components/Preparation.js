import React, { Component } from 'react';
import Start from './Start';
import Plus from './Plus';
import Lines from './Lines';

class Preparation extends Component {
    constructor() {
        super();
        this.state = {
            lines: 1
        }
    }

    addLines = (event) => {
        this.setState({ lines: this.state.lines + 1 }); //Adds one recipe line
        this.props.addEmptyArr(); //Adds an empty array for each recipe line

        console.log(`+ 1 cooking line, now ${this.state.lines + 1} total.`);
    }

    render() {

        return (
            <div className = 'preparation-container'>
                <h1 className='tc'>Preparation</h1>

                <div>
                    <Lines 
                    lines={this.state.lines} /*Passes amount of recipe lines to be generated*/ 
                    fillRecipe={this.props.fillRecipe}/> 
                </div>

                <Plus addLines={this.addLines} />
                <Start cookingStart={this.props.cookingStart} />
            </div >
        );
    }
}

export default Preparation;