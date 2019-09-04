import React from 'react';
import Food from '../Text_in_lines/Food';
import Action from '../Text_in_lines/Action';
import Time from '../Text_in_lines/Time';

const NextLine = ({ state }) => {


    let line = (state.onBreak === false) ? state.currentLine : state.currentLine - 1;

    if (state.currentLine < state.totalLines || state.onBreak === true) {
        return (
            <div className='next-line'>
                <div className="next-text">
                    <Food state={state} line={line} />
                </div>

                <div className="next-text">
                    <Action state={state} line={line} />
                </div>

                <div className="next-text">
                    <Time state={state} line={line} timerIs={'static'} />
                </div>
            </div>
        );
    } else {
        return <div className='next-line'></div>
    }
}

export default NextLine;