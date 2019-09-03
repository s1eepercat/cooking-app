import React, { Component } from 'react';
import Start from '../Components/Preparation/Start';
import Plus from '../Components/Preparation/Plus';
import Lines from '../Components/Preparation/Lines';

class Preparation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lines: 1
        }
    }

    addLines = (event) => {
        this.setState({ lines: this.state.lines + 1 }); //Adds one recipe line
        this.props.addLine(); //Adds an empty array for each recipe line

        console.log(`+ 1 cooking line, now ${this.state.lines + 1} total.`);
    }

    render() {

        return (
            <div className='preparation-container'>
                <h1 className='title-text'>Preparation..</h1>

                <div>
                    <Lines
                        lines={this.state.lines} /*Passes amount of recipe lines to be generated*/
                        fillRecipe={this.props.fillRecipe} />
                </div>

                <div className='option-container'>
                    <Plus addLines={this.addLines} />
                    <Start cookingStart={this.props.cookingStart} />
                </div>
            </div >
        );
    }
}

export default Preparation;