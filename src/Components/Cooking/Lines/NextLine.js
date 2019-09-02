import React from 'react';
import Food from '../Text_in_lines/Food';
import Action from '../Text_in_lines/Action';
import Time from '../Text_in_lines/Time';

const NextLine = ({ state }) => {

    let line = state.currentLine;

    if (state.currentLine < state.totalLines) {
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
    } else {
        return <p></p>
    }
}

export default NextLine;