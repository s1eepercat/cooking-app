import React, { Component } from 'react';
import StickyBar from '../Components/Cooking/StickyBar';
import Start from '../Components/Cooking/Start';
import PreviousLine from '../Components/Cooking/PreviousLine';
import NextLine from '../Components/Cooking/NextLine';
import Next from '../Components/Cooking/Next';
import Timer from '../Components/Cooking/Timer';
import Line from '../Components/Cooking/Line';

import Debug from '../Components/Cooking/Debug';

class Cooking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: this.props.finishedRecipe,
            currentLine: 1,
            totalLines: this.props.finishedRecipe.length,
            started: false,
            paused: false,
            nextLine: false
        }
    }

    pauseInitiate = () => {
        this.setState({paused: true});
        console.log('PAUSE!');
    }

    unpauseInitiate = () => {
        this.setState({paused: false});
        console.log('UNPAUSE!');
    }

    gotoNextLine = () => {
        console.log('SKIPPING....!');
        this.setState({nextLine: true});
    }

    startBreak = () => { 

        const cooking = this;
        let seconds = 0;

            console.log('Break 30 sec!')

            const breakCounter = setInterval(function() {
    
                if (cooking.state.paused === false && cooking.state.nextLine === false) {
                    seconds ++;
                    console.log(seconds);
                }
    
                if (seconds >= 30 || cooking.state.nextLine === true) {
                    console.log('BREAK FINISHED');

                    cooking.setState({nextLine: false});
                    cooking.startCooking();
                    clearInterval(breakCounter);
                }
    
            },1000);

    }

    startCooking = () => {
            const cooking = this;
            let initialCurrentTime = this.state.recipe[this.state.currentLine - 1].time;
    
            if (this.state.started === false) {this.setState({started: true});} //Starts cooking on the first line

            initialCurrentTime = (!initialCurrentTime) ? 6000 : initialCurrentTime; //If time was not set, set it to 10h

            if (initialCurrentTime) {
                let seconds = initialCurrentTime * 60;
    
                const counter = setInterval(function () {

                    if (cooking.state.paused === false && cooking.state.nextLine === false) {
                        seconds--;
                        console.log(seconds);
                    }
    
                    if (seconds < 1 || cooking.state.nextLine === true) {                  
    
                        if (cooking.state.totalLines > cooking.state.currentLine) {
                            cooking.setState({ currentLine: cooking.state.currentLine + 1 });
                            console.log(`${cooking.state.currentLine - 1} LINE FINISHED!`);

                            cooking.setState({nextLine: false});
                            cooking.startBreak();                         
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

                <Debug state = {this.state}/>

                <Start state={this.state} startCooking={this.startCooking} pauseInitiate={this.pauseInitiate} unpauseInitiate ={this.unpauseInitiate}/>

                <PreviousLine />

                <Line state={this.state} /> {/*Info for a user*/}

                <Next gotoNextLine={this.gotoNextLine} />

                <Timer />

                <NextLine />

            </div >
        );
    }
}

export default Cooking;