import React, { Component } from 'react';
import StickyBar from '../Components/Cooking/Lines/StickyBar';
import Start from '../Components/Cooking/Buttons/Start';
import PreviousLine from '../Components/Cooking/Lines/PreviousLine';
import NextLine from '../Components/Cooking/Lines/NextLine';
import Next from '../Components/Cooking/Buttons/Next';
import Timer from '../Components/Cooking/Buttons/Timer';
import Line from '../Components/Cooking/Lines/Line';

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
            done: false
        }
    }

    pauseInitiate = () => {
        if (this.state.started) {
            this.setState({ paused: true });
            console.log('PAUSE!');
        }
    }

    unpauseInitiate = () => {
        if (this.state.started) {
            this.setState({ paused: false });
            console.log('UNPAUSE!');
        }
    }

    gotoNextLine = () => {
        if (this.state.started) {
            console.log('SKIPPING....!');
            this.setState({ nextLine: true });
        }
    }

    makeTimer = () => {
        if (!this.state.onBreak && this.state.started) {

            const cooking = this;

            function returnUpdatedTimers() {
                let allTimers = cooking.state.timers;
                let timedLine = cooking.state.currentLine;
                allTimers.push(timedLine);
                return allTimers;
            }

            const allTimersUpdated = returnUpdatedTimers();

            this.setState({ timers: allTimersUpdated });
            console.log('CREATING A TIMER');
            this.setState({ nextLine: true });
        }
    }

    startBreak = () => {

        const cooking = this;
        let seconds = 0;

        cooking.setState({ onBreak: true })

        console.log('Break 30 sec!')

        const breakCounter = setInterval(function () {

            if (cooking.state.paused === false && cooking.state.nextLine === false) {
                seconds++;
                console.log(seconds);
            }

            if (seconds >= 30 || cooking.state.nextLine === true) {
                console.log('BREAK FINISHED');

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
                    console.log(seconds);
                }

                if (seconds < 1 || cooking.state.nextLine === true) {

                    if (cooking.state.totalLines > cooking.state.currentLine) {
                        cooking.setState({ currentLine: cooking.state.currentLine + 1 });
                        console.log(`${cooking.state.currentLine - 1} LINE FINISHED!`);

                        cooking.setState({ nextLine: false });
                        cooking.startBreak();
                    } else {
                        console.log('Cooking finished!');
                        cooking.setState({ done: true });
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

                <StickyBar recipe={this.state.recipe} timers={this.state.timers} />

                <Start state={this.state} startCooking={this.startCooking} pauseInitiate={this.pauseInitiate} unpauseInitiate={this.unpauseInitiate} />

                <PreviousLine state={this.state} />

                <Line state={this.state} /> {/*Info for a user*/}

                <Next gotoNextLine={this.gotoNextLine} />

                <Timer makeTimer={this.makeTimer} />

                <NextLine state={this.state} />

            </div >
        );
    }
}

export default Cooking;