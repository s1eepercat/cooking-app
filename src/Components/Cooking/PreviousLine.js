import React from 'react';
import Food from './Food';
import Action from './Action';
import Time from './Time';

const PreviousLine = ({ state }) => {

    let line = state.currentLine - 2;

    if (state.done === false) {
        line = state.currentLine - 2;
    } else {
        line = state.currentLine - 1;
    }

    return (
        <div className='flex'>
            <div className="pa3 w-33 tc">
                <Food state={state} line={line} />
            </div>

            <div className="pa3 w-33 tc">
                <Action state={state} line={line} />
            </div>

            <div className="pa3 w-33 tc">
                <Time state={state} line={line} />
            </div>
        </div>
    );
}

export default PreviousLine;