import React from 'react';
import Food from '../Text_in_lines/Food';
import Action from '../Text_in_lines/Action';
import Time from '../Text_in_lines/Time';

const NextLine = ({ state }) => {


    let line = (state.onBreak === false) ? state.currentLine : state.currentLine - 1;

    if (state.currentLine < state.totalLines || state.onBreak === true) {
        return (
            <div className='flex'>
                <div className="pa3 w-33 tc">
                    <Food state={state} line={line} />
                </div>

                <div className="pa3 w-33 tc">
                    <Action state={state} line={line} />
                </div>

                <div className="pa3 w-33 tc">
                    <Time state={state} line={line} timerIs={'static'} />
                </div>
            </div>
        );
    } else {
        return <p></p>
    }
}

export default NextLine;