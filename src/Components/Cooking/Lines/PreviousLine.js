import React from 'react';
import Food from '../Text_in_lines/Food';
import Action from '../Text_in_lines/Action';
import Time from '../Text_in_lines/Time';

const PreviousLine = ({ state }) => {

    let line = state.currentLine - 2;

    if (state.done === false) {
        line = state.currentLine - 2;
    } else {
        line = state.currentLine - 1;
    }

    return (
        <div className='previous-line'>
            <div className="previous-text">
                <Food state={state} line={line} />
            </div>

            <div className="previous-text">
                <Action state={state} line={line} />
            </div>

            <div className="previous-text">
                <Time state={state} line={line} />
            </div>
        </div>
    );
}

export default PreviousLine;