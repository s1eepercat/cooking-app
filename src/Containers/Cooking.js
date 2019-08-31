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
            currentLine: 1,
            totalLines: this.props.finishedRecipe.length
        }
    }

    startCooking = () => {
        console.log('Starting!')
        const cooking = this;
        const initialCurrentTime = this.state.recipe[this.state.currentLine - 1].time;

        if (initialCurrentTime) {
            let seconds = initialCurrentTime * 60;

            const counter = setInterval(function () {
                seconds--;
                console.log(seconds);

                if (seconds <= 1) {
                    if (cooking.state.totalLines > cooking.state.currentLine) {
                        cooking.setState({ currentLine: cooking.state.currentLine + 1 });
                        console.log(`Line finished, ${cooking.state.currentLine} line now!`);
                    } else {
                        console.log('Cooking finished!');
                    }

                    clearInterval(counter);
                }

            }, 1000);
        }
    }

    render() {
        return (
            <div className='Cooking-container'>
                <h1 className='tc'>Cooking</h1>

                <StickyBar />

                <Start state={this.state} startCooking={this.startCooking} />

                <PreviousLine />

                <Line state={this.state} /> {/*Info for a user*/}

                <Options /> {/*Next and Timer*/}

                <NextLine />

            </div >
        );
    }
}

export default Cooking;