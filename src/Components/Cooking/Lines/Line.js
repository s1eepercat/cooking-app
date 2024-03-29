import React from 'react';
import Food from '../Text_in_lines/Food';
import Action from '../Text_in_lines/Action';
import Time from '../Text_in_lines/Time';

const Line = ({ state }) => {

    if (!state.done) {

        if (!state.onBreak) {
            // 'current-line'
            return (
                <div className={!state.paused ? 'current-line' : 'current-line grey-line'}>
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
        return (
            <div className='done-container'>
                <p className='done-text'>Everything is done!</p>
            </div>
        )
    }
}

export default Line;



