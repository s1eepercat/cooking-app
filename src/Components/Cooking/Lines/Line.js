import React from 'react';
import Food from '../Text_in_lines/Food';
import Action from '../Text_in_lines/Action';
import Time from '../Text_in_lines/Time';

const Line = ({ state }) => {

    if (state.done === false) {

        if (state.onBreak === false) {

            return (
                <div className='current-line'>
                    <div className='current-line-text-container'>
                        <div className='current-line-text'>
                            <Food state={state} line={state.currentLine - 1} />
                        </div>
                        <div className='current-line-text'>
                            <Action state={state} line={state.currentLine - 1} />
                        </div>
                    </div>
                    <div className="current-line-time">
                        <Time state={state} line={state.currentLine - 1} timerIs={'going'} />
                    </div>
                </div>
            );
        } else {
            return (
                <div className='break-container'>
                    <p className='break-text'>Get ready:</p>
                    <p className='break-time'> {30 - state.currentBreakSeconds} sec</p>
                </div>
            );
        }

    } else {
        return <h1>Everything is done!</h1>
    }
}

export default Line;



