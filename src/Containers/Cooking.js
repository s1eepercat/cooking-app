import React, { Component } from 'react';
import StickyBar from '../Components/Cooking/StickyBar';
import Start from '../Components/Cooking/Start';
import PreviousLine from '../Components/Cooking/PreviousLine';
import NextLine from '../Components/Cooking/NextLine';
import Options from '../Components/Cooking/Options';
import Line from '../Components/Cooking/Line';

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

                <StickyBar />

                <Start />

                <PreviousLine />

                <Line state={this.state} />

                <Options />

                <NextLine />

            </div >
        );
    }
}

export default Cooking;