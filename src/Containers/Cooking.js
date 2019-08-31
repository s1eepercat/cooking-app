import React, { Component } from 'react';
import StickyBar from '../Components/Cooking/StickyBar';
import Food from '../Components/Cooking/Food';
import Action from '../Components/Cooking/Action';
import Time from '../Components/Cooking/Time';
import Next from '../Components/Cooking/Next';
import Timer from '../Components/Cooking/Timer';
import Start from '../Components/Cooking/Start';

class Cooking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: this.props.finishedRecipe,
            currentLine: 1
        }
    }


    render() {
        return (
            <div className='Cooking-container'>
                <h1 className='tc'>Cooking</h1>

                <div>
                    <StickyBar />
                </div>

                <Start />

                <div>
                    <Food />
                    <Action />
                    <Time />
                    <Next />
                    <Timer />
                </div>
            </div>
        );
    }
}

export default Cooking;