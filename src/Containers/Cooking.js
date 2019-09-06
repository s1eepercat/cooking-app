import React, { Component } from 'react';
import StickyBar from '../Components/Cooking/Lines/StickyBar';
import Start from '../Components/Cooking/Buttons/Start';
import PreviousLine from '../Components/Cooking/Lines/PreviousLine';
import NextLine from '../Components/Cooking/Lines/NextLine';
import Next from '../Components/Cooking/Buttons/Next';
import Timer from '../Components/Cooking/Buttons/Timer';
import Line from '../Components/Cooking/Lines/Line';
import './Cooking.css';
import ReactNoSleep from 'react-no-sleep';

class Cooking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: this.props.finishedRecipe,
            currentLine: 1,
            totalLines: this.props.finishedRecipe.length,
            started: false,
            paused: false,
            nextLine: false,
            onBreak: false,
            timers: [],
            done: false,
            currentLineSeconds: 0,
            currentBreakSeconds: 0,
            makeTimerPrevent: false
        }
    }

    pauseInitiate = () => {
        if (this.state.started && !this.state.done) {
            this.setState({ paused: true });
        }
    }

    unpauseInitiate = () => {
        if (this.state.started && !this.state.done) {
            this.setState({ paused: false });
        }
    }

    gotoNextLine = () => {
        if (this.state.started) {
            this.setState({ nextLine: true });
            if (this.state.onBreak) this.setState({ currentLineSeconds: 0 }); //Reseting timers to remove timer delays on switch
            if (!this.state.onBreak) this.setState({ currentBreakSeconds: 0 });
        }
    }

    makeTimer = () => {
        if (!this.state.onBreak && this.state.started && !this.state.done && !this.state.makeTimerPrevent && this.state.recipe[this.state.currentLine - 1].time <= 5000) {

            this.setState({ makeTimerPrevent: true }); //Debug: prevents from double click > error on the very end (startCooking return it to false)

            const cooking = this;

            function returnUpdatedTimers() {
                let allTimers = cooking.state.timers;
                let timedLine = cooking.state.currentLine;
                allTimers.push(timedLine);
                return allTimers;
            }

            const allTimersUpdated = returnUpdatedTimers();

            this.setState({ timers: allTimersUpdated });

            //Add current seconds on that line into a recipe to create a fixed top line with that remaining time
            let currentRecipe = this.state.recipe;
            currentRecipe[this.state.currentLine - 1].timer = (this.state.currentLineSeconds !== 0) ? this.state.currentLineSeconds : currentRecipe[this.state.currentLine - 1].time * 60;
            this.setState({ recipe: currentRecipe });

            this.timerCount(currentRecipe[this.state.currentLine - 1].timer, this.state.currentLine - 1); //Creates a separate timer for a line

            this.setState({ nextLine: true });
        }
    }

    timerCount = (initialTime, lineToUpdate) => {
        const cooking = this;
        let seconds = initialTime;
        let recipeToUpdate = this.state.recipe; //Copy original recipe

        const counterTimer = setInterval(function () {
            if (seconds > 0) {
                seconds--;
                recipeToUpdate[lineToUpdate].timer = seconds; //We update a copy
                cooking.setState({ recipe: recipeToUpdate }); //We update a state
                //The problem here was:
                //recipe is an array with objects, one for a line
                //since we here update object's values instead of an array itself, actual state (array) didn't change,
                //and did not trigger rendering.
            } else {
                clearInterval(counterTimer);
            }
        }, 1000);
    }

    startBreak = () => {
        const cooking = this;
        let seconds = 0;

        cooking.setState({ onBreak: true })

        const breakCounter = setInterval(function () {

            if (cooking.state.paused === false && cooking.state.nextLine === false) {
                seconds++;
                cooking.setState({ currentBreakSeconds: seconds });
            }

            if (seconds >= 30 || cooking.state.nextLine === true) {
                cooking.setState({ onBreak: false })
                cooking.setState({ nextLine: false });
                cooking.startCooking();
                clearInterval(breakCounter);
            }
        }, 1000);
    }

    startCooking = () => {
        const cooking = this;
        let initialCurrentTime = this.state.recipe[this.state.currentLine - 1].time;

        if (this.state.started === false) { this.setState({ started: true }); } //Starts cooking on the first line

        initialCurrentTime = (!initialCurrentTime) ? 6000 : initialCurrentTime; //If time was not set, set it to 10h

        if (initialCurrentTime) {
            let seconds = initialCurrentTime * 60;

            const counter = setInterval(function () {

                if (cooking.state.paused === false && cooking.state.nextLine === false) {
                    seconds--;
                    cooking.setState({ currentLineSeconds: seconds });
                }

                if (seconds < 1 || cooking.state.nextLine === true) {

                    if (cooking.state.totalLines > cooking.state.currentLine) {
                        cooking.setState({ currentLine: cooking.state.currentLine + 1 });
                        cooking.setState({ nextLine: false });
                        cooking.setState({ makeTimerPrevent: false }); //Needed for debug, see ()
                        cooking.startBreak();
                    } else {
                        cooking.setState({ done: true });
                    }

                    clearInterval(counter);
                }

            }, 1000);
        }
    }

    render() {

        return (
            <div className='cooking-container'>
                <h1 className='title-text'>Cooking!</h1>

                <div className='sticky-bar'>
                    <StickyBar state={this.state} />
                </div>


                <PreviousLine state={this.state} />

                <Line state={this.state} /> {/*Info for a user*/}

                <NextLine state={this.state} />


                <div className='option-container'>
                    <Start state={this.state} startCooking={this.startCooking} pauseInitiate={this.pauseInitiate} unpauseInitiate={this.unpauseInitiate} />

                    <Next gotoNextLine={this.gotoNextLine} state={this.state} />

                    <Timer makeTimer={this.makeTimer} state={this.state} />
                </div>

                <div className="nosleep-container">
                    <ReactNoSleep>
                        {({ isOn, enable, disable }) => (
                            <button
                                onClick={isOn ? disable : enable}
                                className="nosleep-button">
                                {isOn ? 'No-sleep is on' : 'No-sleep is off'}
                            </button>
                        )}
                    </ReactNoSleep>
                </div>

            </div >
        );
    }
}

export default Cooking;